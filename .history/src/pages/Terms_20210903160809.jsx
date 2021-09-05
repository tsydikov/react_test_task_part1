import React, { useEffect } from 'react'
import MainLayout from '../UI/MainLayout/MainLayout';
import Form from '../UI/Form/Form';
import GetFetchData from '../API/GetFetchData';

const Term = () => {
  let terms = ''
  useEffect(()=>{
    getFetchData()
  },[])

  async function getFetchData() {
    const fetched = await GetFetchData.get()
    terms =fetched[0].text
    console.log(terms)
}
  return (
      <Form>
        <h1>Terms &#38; Conditions</h1>
        <h3>Yuo should obliged to apply the Terms &#38; Conditions to use the service</h3>
        <div>{terms}ada</div>
      </Form>
  )
}

export default Term;