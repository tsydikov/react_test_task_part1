import React from 'react'
import MainLayout from '../UI/MainLayout/MainLayout';
import Form from '../UI/Form/Form';

const Choose = () => {
  return (
    // <div className="App">
    <MainLayout>
      {/* <div className="content"> */}
      <Form>
        <h1 >Choose your role</h1>
        <h3>Please, choose your role in service</h3>
        {/* <ReactSVG src={borrower} />
          <ReactSVG src={checkmark} />
          <ReactSVG src={close} />
          <ReactSVG src={guide} />
          <ReactSVG src={lender} /> */}
      </Form>
      {/* </div> */}
    </MainLayout>
    // </div>
  )
}

export default Choose;