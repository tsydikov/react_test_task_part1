import React from 'react'
import Navbar from '../Navbar/Navbar'

const MainLayout = ({children}) => {
  return (
    <div className="body">
        < Navbar />
        <div className="wrapper">
        {children}
        </div>
        
    </div>
  );
}

export default MainLayout;