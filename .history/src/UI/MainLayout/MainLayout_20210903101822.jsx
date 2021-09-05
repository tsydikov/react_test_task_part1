import React from 'react'
import Navbar from '../Navbar/Navbar'
import cl from "./MainLayout.module.css";

const MainLayout = ({children}) => {
  return (
    <div className={cl.body}>
        <Navbar />
        <div className={cl.wrapper}>
        {children}
        </div>
        
    </div>
  );
}

export default MainLayout;