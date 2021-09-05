import React from 'react'
import cl from "./ButtonCancel.module.css";

const ButtonCancel = ({ children, ...props }) => {
    return (
        <button {...props} className={cl.Btn}>
            {children}
        </button>
    )
}

export default ButtonCancel;