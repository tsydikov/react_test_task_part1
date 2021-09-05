import React, { useContext } from 'react'
import MainLayout from '../UI/MainLayout/MainLayout';
import Form from '../UI/Form/Form';
import { userContext } from '../context';
import { BORROWER } from '../constants';
import borrower from '../icons/borrower.svg';
import lender from '../icons/lender.svg';
import { ReactSVG } from 'react-svg'

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
      </Form>
    </MainLayout>
  )
}

export default ChoosenRole;