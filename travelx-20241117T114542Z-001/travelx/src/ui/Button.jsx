import React from 'react'
import { ClipLoader } from "react-spinners"

const Button = ({
    disabled,
    label,
    className,
    onClick = () => {}
}) => {
    const defaultClassName = "w-fit bg-blue-500 text-white px-6 font-bold py-4 rounded-xl disabled:bg-blue-700"

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={className ? className : defaultClassName}
        >
            {
                disabled
                    ? <ClipLoader size={16} />
                    : label
            }
        </button>
    )
}

export default Button