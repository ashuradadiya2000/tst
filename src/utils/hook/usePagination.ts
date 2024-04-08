import { useMemo } from "react";

export const DOTS = "...";

const range = (start: number, end: number) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
};

interface usePaginationArgs {
    totalCount: number
    pageSize: number
    siblingCount: number
    currentPage: number
}
export const usePagination = ({ totalCount, pageSize, siblingCount = 1, currentPage }: usePaginationArgs) => {

    const paginationRange = useMemo(() => {

        const totalPage = Math.ceil(totalCount / pageSize);
        const totalPageNumbers = siblingCount + 5;

        if (totalPageNumbers >= totalPage) {
            return range(1, totalPage);
        }

        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPage);

        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPage - 2;

        const firstPageIndex = 1;
        const lastPageIndex = totalPage;

        if (!shouldShowLeftDots && shouldShowRightDots) {
            const leftItemCount = 3 + 2 * siblingCount;
            const leftRange = range(1, leftItemCount);
            return [...leftRange, DOTS, totalPage];
        }

        if (shouldShowLeftDots && !shouldShowRightDots) {
            const rightItemCount = 3 + 2 * siblingCount;
            const rightRange = range(
                totalPage - rightItemCount + 1,
                totalPage
            );
            return [firstPageIndex, DOTS, ...rightRange];
        }

        if (shouldShowLeftDots && shouldShowRightDots) {
            const middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
        }
    }, [totalCount, pageSize, siblingCount, currentPage]);

    return paginationRange;
};
