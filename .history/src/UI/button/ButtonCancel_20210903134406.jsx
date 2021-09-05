import React from 'react'
import cl from "./Button.module.css";

const ButtonCancel = ({ children, ...props }) => {
    return (
        <button {...props} className={cl.BtnCancel}>
            {children}
        </button>
    )
}

export default ButtonCancel;