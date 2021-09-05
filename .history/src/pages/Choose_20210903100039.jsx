import React from 'react'
import MainLayout from '../UI/MainLayout/MainLayout';
import Form from '../UI/Form/Form';

const Choose = () => {
    return (
        <div className="App">
      <MainLayout>
      <div className="content">
      <Form>
          <h1 >Choose</h1>
          {/* <ReactSVG src={borrower} />
          <ReactSVG src={checkmark} />
          <ReactSVG src={close} />
          <ReactSVG src={guide} />
          <ReactSVG src={lender} /> */}
        </Form>
      </div>
      </MainLayout>
    </div>
    )
}

export default Choose;