import React, { useEffect, useState } from 'react'
import MainLayout from '../UI/MainLayout/MainLayout';
import Form from '../UI/Form/Form';
import GetFetchData from '../API/GetFetchData';

const Term = () => {
  const [terms,setTerms ]= useState('')
  useEffect(()=>{
    getFetchData()
  },[])

  //  .replace(/<\/?[a-z][a-z0-9]*[^<>]*>/ig, "")
  async function getFetchData() {
    const fetched = await GetFetchData.get()
    setTerms(fetched[0].text.normalize()) 
    console.log(terms)
}
  return (
      <Form>
        <h1>Terms &#38; Conditions</h1>
        <h3>Yuo should obliged to apply the Terms &#38; Conditions to use the service</h3>
        <div>{`${terms}`}</div>
      </Form>
  )
}

export default Term;