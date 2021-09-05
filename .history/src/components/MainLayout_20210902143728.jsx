import React from 'react'
import Navbar from '../UI/Navbar'

function MainLayout({children}) {
  return (
    <div className="App">
        < Navbar />
        {children}
    </div>
  );
}

export default MainLayout;