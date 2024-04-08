import React from "react";

interface FormInputProps {
    label?: string;
    name: string;
    id: string;
    value?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type: "text" | "email" | "number" | "date" | "time" | "search" | "password";
    min?: string;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
    readOnly?: boolean;
    error?: string | null;
    icons?: React.ReactNode;
}

const FormInput: React.FC<FormInputProps> = ({
    className,
    label,
    name,
    id,
    value,
    onChange,
    type,
    min,
    error,
    disabled,
    placeholder,
    readOnly,
    icons,
}): JSX.Element => {
    return (
        <div className={"w-full " + (className ? className : "")}>
            {label && (
                <label
                    htmlFor={id}
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                    {label}
                </label>
            )}
            <div className={label ? "mt-2" : "relative"}>
                <input
                    readOnly={readOnly}
                    type={type}
                    name={name}
                    id={id}
                    value={value}
                    onChange={onChange}
                    className={
                        "form-control w-full " + (error ? "border-danger" : "")
                    }
                    min={min}
                    disabled={disabled}
                    placeholder={placeholder}
                />
                {icons ? icons : ""}
                {error && <div className="text-danger mt-1">{error}</div>}
            </div>
        </div>
    );
};

export default FormInput;
