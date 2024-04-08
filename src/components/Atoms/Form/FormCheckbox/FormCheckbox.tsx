import React from "react";

interface FormCheckboxProps {
    name: string;
    value: string;
    id: string;
    label: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    checked: boolean;
    disabled?: boolean;
}

const FormCheckbox: React.FC<FormCheckboxProps> = ({
    name,
    value,
    id,
    label,
    checked,
    onChange,
    disabled,
}): JSX.Element => {
    return (
        <div className="form-check mr-4">
            <input
                id={id}
                className="form-check-input"
                type="checkbox"
                name={name}
                value={value}
                checked={checked}
                disabled={disabled}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    onChange ? onChange(e) : () => {}
                }
            />
            <label
                className="form-check-label cursor-pointer select-none"
                htmlFor={id}
            >
                {label}
            </label>
        </div>
    );
};

export default FormCheckbox;
