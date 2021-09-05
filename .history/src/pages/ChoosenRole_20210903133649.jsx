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
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.08659 7.01614L13.8219 1.16776C14.0687 0.89858 14.0577 0.482259 13.7971 0.226496C13.5364 -0.0292666 13.12 -0.0324176 12.8555 0.219372L7.12919 6.05872L1.16804 0.21034C0.997378 0.0310759 0.742535 -0.0408382 0.50334 0.0227684C0.264146 0.0863751 0.0786819 0.275376 0.0196006 0.515733C-0.0394806 0.75609 0.0372271 1.00954 0.219675 1.17679L6.17179 7.01614L0.219675 12.8555C-0.0321093 13.12 -0.0289582 13.5364 0.226799 13.797C0.482557 14.0577 0.898868 14.0687 1.16804 13.8219L7.12919 7.97356L12.8555 13.8129C13.12 14.0647 13.5364 14.0615 13.7971 13.8058C14.0577 13.55 14.0687 13.1337 13.8219 12.8645L8.08659 7.01614Z" fill="#BEC2C6"/>
</svg>
      </Form>
    </MainLayout>
  )
}

export default ChoosenRole;