import React from "react";
import Select, { SingleValue } from "react-select";

import List from "@assets/city_list.json";

interface Item {
    city: string;
}

interface FormSelectProps {
    value: string | null;
    isDisabled?: boolean;
    onChange: (newValue: SingleValue<Item>) => void;
    error?: string | undefined;
    id: string;
    placeholder?: string;
    label?: string;
    [key: string]: any
}

const SelectCity: React.FC<FormSelectProps> = (props): JSX.Element => {
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
                value={List.find((city) => city.city === props.value || "")}
                getOptionLabel={(option) => option.city}
                getOptionValue={(option) => option.city}
            />
            {props.error && (
                <div className="text-danger mt-1">{props.error}</div>
            )}
        </div>
    );
};

export default SelectCity;
