import React from 'react'
import cl from "./Button.module.css";

const ButtonReverse = ({ children, ...props }) => {
    return (
        <button {...props} className={cl.BtnReverse}>
            {children}
        </button>
    )
}

export default ButtonReverse;