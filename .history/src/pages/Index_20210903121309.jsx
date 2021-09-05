import React from 'react'
import MainLayout from '../UI/MainLayout/MainLayout';
import Form from '../UI/Form/Form';
import borrower from '../icons/borrower.svg';
import lender from '../icons/lender.svg';
import { ReactSVG } from 'react-svg'
import Button from '../UI/button/Button';
import cl from "../UI/Form/Form.module.css";
import { useHistory } from 'react-router-dom';

const Index = () => {
  const router = useHistory()
  const userBorrower = () =>{
    
  }
  return (
    <MainLayout>
      <Form>
        <h1>Choose your role</h1>
        <h3>Please, choose your role in service</h3>
        <div className={cl.twoButtons}>
        <Button onClick={() => router.push('/choosen')}><ReactSVG src={borrower} />The Borrower</Button> 
        <Button><ReactSVG src={lender} />
        <pre>The Lender</pre></Button>
        </div>
        
      </Form>
    </MainLayout>
  )
}

export default Index;