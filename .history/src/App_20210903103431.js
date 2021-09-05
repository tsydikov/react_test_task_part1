import React from 'react'
import MainLayout from './UI/MainLayout/MainLayout';
import './styles/App.css'

import checkmark from './icons/checkmark.svg';
import close from './icons/close.svg';
import guide from './icons/guide.svg';
import { ReactSVG } from 'react-svg'
import Navbar from './UI/Navbar/Navbar';
import Form from './UI/Form/Form';
import { BrowserRouter, Route } from "react-router-dom";
import Choose from './pages/Choose';
import ChoosenRole from "./pages/ChoosenRole";
import Terms from "./pages/Terms";


function App() {
  return (
   <BrowserRouter>
    {/* <ReactSVG src={checkmark} />
          <ReactSVG src={close} />
          <ReactSVG src={guide} /> */}
    <Route path="">
      <Choose />
    </Route>
    <Route path="/choosen">
      <ChoosenRole />
    </Route>
    <Route path="/terms">
      <Terms />
    </Route>
   </BrowserRouter>
  );
}

export default App;
