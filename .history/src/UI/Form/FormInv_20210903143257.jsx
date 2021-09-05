import React from 'react'
import cl from "./FormInv.module.css";

const FormInv = ({ children }) => {
    return (
        <div className={cl.form}>
            {children}
        </div>
    )
}

export default FormInv;