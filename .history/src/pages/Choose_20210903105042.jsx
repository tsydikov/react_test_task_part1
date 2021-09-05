import React from 'react'
import MainLayout from '../UI/MainLayout/MainLayout';
import Form from '../UI/Form/Form';
import borrower from '../icons/borrower.svg';
import lender from '../icons/lender.svg';
import { ReactSVG } from 'react-svg'
import Button from '../UI/button/Button';

const Choose = () => {
  return (
    <MainLayout>
      <Form>
        <h1>Choose your role</h1>
        <h6>Please, choose your role in service</h6>
        <Button><ReactSVG src={borrower} />The Borrower</Button> 
        <Button><ReactSVG src={lender} />The Lender</Button>
      </Form>
    </MainLayout>
  )
}

export default Choose;