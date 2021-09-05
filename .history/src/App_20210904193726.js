import React, { useState } from 'react'
import './styles/App.css'
import Navbar from './UI/Navbar/Navbar';
import { BrowserRouter } from "react-router-dom";
import AppRouter from './components/AppRouter';
import { userContext } from "./context";


function App() {
  const [user,setUser] = useState('')
  return (
    <userContext.Provider value={{
      user,
      setUser
    }}>
      <BrowserRouter>
     <Navbar />
    <AppRouter />
   </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
