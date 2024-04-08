import React from "react";
import ReactQuill from "react-quill";
import { formats, modules } from "@utils/common";
import "react-quill/dist/quill.snow.css";

interface FormTextEditerProps {
    id: string;
    label: string;
    value: string;
    error?: string;
    onChange: (val: string) => void;
}

const FormTextEditer: React.FC<FormTextEditerProps> = ({
    id,
    label,
    value,
    onChange,
    error,
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
                <ReactQuill
                    theme="snow"
                    value={value}
                    onChange={onChange}
                    modules={modules}
                    formats={formats}
                    id={id}
                />
                {error && <div className="text-danger mt-1">{error}</div>}
            </div>
        </div>
    );
};

export default FormTextEditer;
