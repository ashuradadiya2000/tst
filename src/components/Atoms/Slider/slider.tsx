interface SampleNextArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

interface SamplePrevArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export function SampleNextArrow(props: SampleNextArrowProps) {
    return (
        <BsChevronRight
            {...props}
            style={{
                height: "35px !important",
                width: "35px !important",
                padding: "5px 5px 5px 8px",
            }}
        />
    );
}

export function SamplePrevArrow(props: SamplePrevArrowProps) {
    return (
        <BsChevronLeft
            {...props}
            style={{
                height: "35px !important",
                width: "35px !important",
                padding: "5px 8px 5px 5px",
            }}
        />
    );
}
