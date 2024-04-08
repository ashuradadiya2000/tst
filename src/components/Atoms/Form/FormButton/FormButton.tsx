import React from "react";

interface FormButtonProps {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    variants: | "primary" | "secondary" | "success" | "warning" | "pending" | "danger" | "dark" | string;
    children?: React.ReactNode;
    className?: string;
    type?: "submit" | "reset" | "button";
    disabled?: boolean
}

const FormButton: React.FC<FormButtonProps> = ({ onClick, variants, children, className, type, disabled }): JSX.Element => {
    return (
        <button
            className={"btn " + (variants ? ` btn-${variants} ` : " btn-primary ") + (className ? className : "")} disabled={disabled} onClick={onClick} type={type ? type : "submit"} >
            {children}
        </button>
    );
};

export default FormButton;
