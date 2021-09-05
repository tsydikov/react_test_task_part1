import React from 'react'
import cl from "./ButtonReverse.module.css";

const ButtonReverse = ({ children, ...props }) => {
    return (
        <button {...props} className={cl.BtnReverse}>
            {children}
        </button>
    )
}

export default ButtonReverse;