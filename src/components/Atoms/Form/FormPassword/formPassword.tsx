import React, { useState } from "react";

interface FormInputProps {
    label?: string;
    name: string;
    id: string;
    value?: string;
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

const Formpassword: React.FC<FormInputProps> = ({
    className,
    label,
    name,
    id,
    value,
    onChange,
    min,
    error,
    disabled,
    placeholder,
    readOnly,
    icons,
}): JSX.Element => {
    const [passwordVisible, setPasswordVisible] = useState(false);

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
                    type={passwordVisible ? "text" : "password"}
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
                <span
                    onClick={() => setPasswordVisible(!passwordVisible)}
                    className="absolute mt-2"
                    style={{
                        right: "10px",
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#ccc" // Set the stroke color to light gray (#ccc)
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        icon-name={passwordVisible ? "eye-slash" : "eye"}
                        data-lucide={passwordVisible ? "eye-slash" : "eye"}
                        className="feather feather-eye"
                        onClick={() => setPasswordVisible(!passwordVisible)}
                        style={{ cursor: "pointer" }}
                    >
                        {passwordVisible ? (
                            <path d="M12 1a11 11 0 0 0-9 4 11 11 0 0 0 9 17 11 11 0 0 0 9-4 11 11 0 0 0-9-17zM1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        ) : (
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM4.585 4.585a6.5 6.5 0 0 1 9.192 9.192M3 3l18 18"></path>
                        )}
                        <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                </span>

                {icons ? icons : ""}
                {error && <div className="text-danger mt-1">{error}</div>}
            </div>
        </div>
    );
};

export default Formpassword;
