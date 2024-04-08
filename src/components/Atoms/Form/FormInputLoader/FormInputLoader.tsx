import React from 'react'

interface FormInputLoaderProps {
    width: number
    height: number
    className: string
}

const FormInputLoader: React.FC<FormInputLoaderProps> = ({ width, height, className }): JSX.Element => {
    return (
        <div>
            <svg width={width} height={height} viewBox="-2 -2 42 42" xmlns="http://www.w3.org/2000/svg" stroke="rgb(30, 41, 59)" className={className}>
                <g fill="none" fill-rule="evenodd">
                    <g transform="translate(1 1)" stroke-width="4">
                        <circle stroke-opacity=".5" cx="18" cy="18" r="18"></circle>
                        <path d="M36 18c0-9.94-8.06-18-18-18">
                            <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform>
                        </path>
                    </g>
                </g>
            </svg>
        </div>
    )
}

export default FormInputLoader