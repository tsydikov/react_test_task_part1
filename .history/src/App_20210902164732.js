import React from 'react'
import MainLayout from './components/MainLayout';
import './styles/App.css'
import borrower from './icons/borrower.svg';
import checkmark from './icons/checkmark.svg';
import close from './icons/close.svg';
import guide from './icons/guide.svg';
import lender from './icons/lender.svg';
import { ReactSVG } from 'react-svg'
import Navbar from './UI/Navbar/Navbar';
import Form from './UI/Form/Form';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Form>
        <div className="form">
          <h1 >WORK</h1>
          <ReactSVG src={borrower} />
          <ReactSVG src={checkmark} />
          <ReactSVG src={close} />
          <ReactSVG src={guide} />
          <ReactSVG src={lender} />
        </div>

      </Form>

    </div>
  );
}

export default App;
