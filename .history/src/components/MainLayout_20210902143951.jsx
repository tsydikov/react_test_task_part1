import React from 'react'
import Navbar from '../UI/Navbar/Navbar'

function MainLayout({children}) {
  return (
    <div>
        < Navbar />
        {children}
    </div>
  );
}

export default MainLayout;