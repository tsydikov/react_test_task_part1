import React, { useContext } from 'react'
import MainLayout from '../UI/MainLayout/MainLayout';
import Form from '../UI/Form/Form';
import { userContext } from '../context';
import { BORROWER } from '../constants';
import borrower from '../icons/borrower.svg';
import lender from '../icons/lender.svg';
import close from '../icons/lender.svg';
import { ReactSVG } from 'react-svg'
import cl from "../UI/Form/Form.module.css";
import Button from '../UI/button/Button';

const ChoosenRole = () => {
  const {user} = useContext(userContext)
  return (
    <MainLayout>
      <Form>
        <h1>
          the {user} 
          {(user === BORROWER) ? <ReactSVG src={borrower} /> : <ReactSVG src={lender} />}
        </h1>
        <ReactSVG src={close} />
        <h3>You have choosen the role - <strong>the {user}</strong></h3>
        <div className={cl.twoButtons}>
          <Button><ReactSVG src={borrower} />The {BORROWER}</Button>
          <Button><ReactSVG src={close} />
            Cancel</Button>
        </div>
        <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5303 0.969667C12.8232 1.26256 12.8232 1.73744 12.5303 2.03033L5.5303 9.0303C5.2374 9.3232 4.7626 9.3232 4.46967 9.0303L0.469667 5.0303C0.176777 4.7374 0.176777 4.2626 0.469667 3.9697C0.762558 3.6768 1.23744 3.6768 1.53033 3.9697L5 7.4393L11.4697 0.969667C11.7626 0.676777 12.2374 0.676777 12.5303 0.969667Z" fill="#343A40"/>
</svg>
      </Form>
    </MainLayout>
  )
}

export default ChoosenRole;