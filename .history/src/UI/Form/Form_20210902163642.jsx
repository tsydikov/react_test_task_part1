import React from 'react'
import cl from "./Form.module.css";

const Form = ({ children }) => {
    return (
        <div className={cl.form}>
            {children}
        </div>


    )
}

export default Form;