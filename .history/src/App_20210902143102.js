import React from 'react'
import MainLayout from './components/MainLayout';
import './styles/App.css'

function App() {
  return (
    <MainLayout>
      <h1>WORK</h1>
      <ReactSVG src={borrower} />
      <ReactSVG src={checkmark} />
      <ReactSVG src={close} />
      <ReactSVG src={guide} />
      <ReactSVG src={lender} />
    </MainLayout>
  );
}

export default App;
