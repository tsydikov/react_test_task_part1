import React, { useContext } from 'react'
import MainLayout from '../UI/MainLayout/MainLayout';
import Form from '../UI/Form/Form';
import { userContext } from '../context';
import { BORROWER } from '../constants';

const ChoosenRole = () => {
  const {user} = useContext(userContext)
  return (
    <MainLayout>
      <Form>
        <h1>
          the {user}
        {(user === BORROWER) ? <ReactSVG src={borrower} />}
        </h1>
        <h3>You have choosen the role - <strong>the {user}</strong></h3>
      </Form>
    </MainLayout>
  )
}

export default ChoosenRole;