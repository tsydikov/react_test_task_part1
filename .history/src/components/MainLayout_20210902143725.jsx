import React from 'react'
import Navbar from '../UI/Navbar'

function MainLayout({children}) {
  return (
    <divclassName="App">
        < Navbar />
        {children}
    </div>
  );
}

export default MainLayout;