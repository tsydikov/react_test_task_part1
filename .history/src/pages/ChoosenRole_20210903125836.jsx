import React from 'react'
import MainLayout from '../UI/MainLayout/MainLayout';
import Form from '../UI/Form/Form';

const ChoosenRole = () => {
  const {user} = useContext(userContext)
  return (
    <MainLayout>
      <Form>
        <h1 >ChoosenRoleA {user}</h1>
      </Form>
    </MainLayout>
  )
}

export default ChoosenRole;