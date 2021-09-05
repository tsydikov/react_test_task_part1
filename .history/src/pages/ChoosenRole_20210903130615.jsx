import React, { useContext } from 'react'
import MainLayout from '../UI/MainLayout/MainLayout';
import Form from '../UI/Form/Form';
import { userContext } from '../context';

const ChoosenRole = () => {
  const {user} = useContext(userContext)
  return (
    <MainLayout>
      <Form>
        <h1>{user}</h1>
        <h3>You have choosen the role - <strong>{user}</strong></h3>
      </Form>
    </MainLayout>
  )
}

export default ChoosenRole;