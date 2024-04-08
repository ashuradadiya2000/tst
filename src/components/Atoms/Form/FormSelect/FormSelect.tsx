import React from "react";
import Select from "react-select";

// export type SingleValue<Option> = Option | null;
// export type MultiValue<Option> = readonly Option[];
// export type OnChangeValue<Option, IsMulti extends boolean> = IsMulti extends true ? MultiValue<Option> : SingleValue<Option>;

// type MyOption = { label: string, value: number }

interface FormSelectProps {
    options: any[];
    value: any;
    isDisabled: boolean;
    onChange: (newValue: any) => void;
    isMulti: boolean;
    error?: string | undefined;
    id: string;
    placeholder?: string;
    label?: string;
    getOptionLabel?: any;
    getOptionValue?: any;
    isClearable?: any;
    [key: string]: any
}

const FormSelect: React.FC<FormSelectProps> = ({
    options,
    value,
    onChange,
    isMulti,
    isDisabled,
    error,
    id,
    label,
    placeholder,
    getOptionLabel,
    getOptionValue,
    isClearable
}): JSX.Element => {
    return (
        <div className="w-full mb-4">
            <label
                htmlFor={id}
                className="block text-sm font-medium leading-6 text-gray-900"
            >
                {label}
            </label>
            <div className="mt-2">
                <Select
                    inputId={id}
                    aria-labelledby={id}
                    options={options}
                    isMulti={isMulti}
                    value={value}
                    placeholder={placeholder}
                    className="form-control"
                    isDisabled={isDisabled}
                    onChange={(val) => onChange(val)}
                    getOptionLabel={getOptionLabel}
                    getOptionValue={getOptionValue}
                    isClearable={isClearable}
                // styles={{
                //     menu: (styles) => ({
                //         ...styles,
                //         zIndex: 999
                //     }),
                //     control: (styles) => ({
                //         ...styles,
                //         borderColor: error ? '#dc3545' : '#dee2e6'
                //     }),
                //     input: (styles) => ({
                //         ...styles,
                //         border: 'none',
                //         outline: 'none',
                //         boxShadow: 'none',
                //         "input[type='text']": {
                //             border: 'none',
                //             outline: 'none',
                //             boxShadow: 'none',
                //         }
                //     }),
                //     multiValue: (styles) => {
                //         return {
                //             ...styles,
                //             backgroundColor: '#e2e8f0',
                //             borderRadius: 5
                //         };
                //     },
                //     multiValueRemove: (styles) => {
                //         return {
                //             ...styles,
                //             borderLeft: '1px solid #cbd5e1',
                //         };
                //     },
                // }}
                />
                {error && <div className="text-danger mt-1">{error}</div>}
            </div>
        </div>
    );
};

export default FormSelect;
