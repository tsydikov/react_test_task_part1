import React from 'react'
import MainLayout from './UI/MainLayout/MainLayout';
import './styles/App.css'
import borrower from './icons/borrower.svg';
import checkmark from './icons/checkmark.svg';
import close from './icons/close.svg';
import guide from './icons/guide.svg';
import lender from './icons/lender.svg';
import { ReactSVG } from 'react-svg'
import Navbar from './UI/Navbar/Navbar';
import Form from './UI/Form/Form';
import { BrowserRouter, Route } from "react-router-dom";
import Choose from './pages/Choose';


function App() {
  return (
   <BrowserRouter>
    <Route path="">
      <Choose />
    </Route>
   </BrowserRouter>
  );
}

export default App;
