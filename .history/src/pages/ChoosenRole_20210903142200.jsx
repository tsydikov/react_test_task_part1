import React, { useContext } from 'react'
import MainLayout from '../UI/MainLayout/MainLayout';
import Form from '../UI/Form/Form';
import { userContext } from '../context';
import { BORROWER } from '../constants';
import borrower from '../icons/borrower.svg';
import lender from '../icons/lender.svg';
import guide from '../icons/guide.svg';
import close from '../icons/close.svg';
import { ReactSVG } from 'react-svg'
import cl from "../UI/Form/Form.module.css";
import Button from '../UI/button/Button';
import ButtonCancel from '../UI/button/ButtonCancel';

const ChoosenRole = () => {
  const {user} = useContext(userContext)
  return (
    <MainLayout>
      <Form>
        <h1>
          the {user} 
          {(user === BORROWER) ? <ReactSVG src={borrower} /> : <ReactSVG src={lender} />}
        </h1>
        <h3>You have choosen the role - <strong>the {user}</strong></h3>
        <div className={cl.twoButtons}>
          <Button><ReactSVG src={borrower} />Go To Cabinet</Button>
          <ButtonCancel><ReactSVG src={close} />
            Cancel</ButtonCancel>
        </div>
      </Form>
      <Form>
      <div className={cl.twoButtons}>
      <ButtonCancel><ReactSVG src={guide} />Guide Flow</ButtonCancel>
      <span>
        Study the guide flow for the convenience of using the service.
      </span>
      </div>
      </Form>
    </MainLayout>
  )
}

export default ChoosenRole;