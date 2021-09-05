import React from 'react'
import MainLayout from './UI/MainLayout/MainLayout';
import './styles/App.css'

import checkmark from './icons/checkmark.svg';
import close from './icons/close.svg';
import guide from './icons/guide.svg';
import { ReactSVG } from 'react-svg'
import Navbar from './UI/Navbar/Navbar';
import Form from './UI/Form/Form';
import { BrowserRouter, Route, Switch, useHistory,Redirect } from "react-router-dom";
import Choose from './pages/Choose';
import ChoosenRole from "./pages/ChoosenRole";
import Terms from "./pages/Terms";
import AppRouter from './components/AppRouter';
import Button from './UI/button/Button';
import { userContext } from "./context";


function App() {
  return (
    <userContext.Provider>
      <BrowserRouter>
    {/* <ReactSVG src={checkmark} />
          <ReactSVG src={close} />
          <ReactSVG src={guide} /> */}
    <AppRouter />
    <Redirect to="/choose" />
   </BrowserRouter>
    </userContext.Provider>
   
  );
}

export default App;
