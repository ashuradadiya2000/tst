import React from 'react'


interface FormSwitchProps {
    label: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    id: string
    checked: boolean
    disabled?: boolean
}

const FormSwitch: React.FC<FormSwitchProps> = ({ disabled, label, onChange, id, checked }): JSX.Element => {
    return (
        <div className="form-switch form-check">
            <input type="checkbox" className="form-check-input" onChange={onChange} id={id} checked={checked} disabled={disabled} />
            <label className="form-check-label cursor-pointer select-none" htmlFor={id}>{label}</label>
        </div>
    )
}

export default FormSwitch