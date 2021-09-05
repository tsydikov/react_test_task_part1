import React from 'react'
import cl from "./FormInv.module.css";

const FormInv = ({ children }) => {
    return (
        <div className={cl.FormInv}>
            {children}
        </div>
    )
}

export default FormInv;