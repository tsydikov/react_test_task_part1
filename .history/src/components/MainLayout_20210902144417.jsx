import React from 'react'
import Navbar from '../UI/Navbar/Navbar'

const MainLayout = ({children}) => {
  return (
    <div>
        < Navbar />
        {children}
    </div>
  );
}

export default MainLayout;