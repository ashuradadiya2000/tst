import React from "react";
import Select, { SingleValue } from "react-select";

import List from "@assets/states_list.json";

interface Item {
    state: string;
}

interface SelectStateProps {
    value: string | null;
    isDisabled?: boolean;
    onChange: (newValue: SingleValue<Item>) => void;
    error?: string | undefined;
    id: string;
    placeholder: string;
    label: string;
    [key: string]: any
}

const SelectState: React.FC<SelectStateProps> = (props): JSX.Element => {
    return (
        <div className="w-full">
            <label
                htmlFor={props.id}
                className="block text-sm font-medium leading-6 text-gray-900"
            >
                {props.label}
            </label>
            <Select
                {...props}
                options={List}
                value={List.find((state) => state.state === props.value)}
                getOptionLabel={(option) => option.state}
                getOptionValue={(option) => option.state}
            // styles={{
            //     container: (styles) => ({
            //         ...styles,
            //         width: '100%'
            //     }),
            //     menu: (styles) => ({
            //         ...styles,
            //         zIndex: 999
            //     }),
            //     control: (styles) => ({
            //         ...styles,
            //         borderColor: props.error ? '#dc3545' : '#dee2e6'
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
            {props.error && (
                <div className="text-danger mt-1">{props.error}</div>
            )}
        </div>
    );
};

export default SelectState;
