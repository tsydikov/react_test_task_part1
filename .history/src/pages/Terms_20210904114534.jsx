import React, { useEffect, useRef, useState } from 'react'
import MainLayout from '../UI/MainLayout/MainLayout';
import Form from '../UI/Form/Form';
import GetFetchData from '../API/GetFetchData';
import cl from "../UI/Form/Form.module.css";
import Button from '../UI/button/Button';
import checkmark from '../icons/checkmark.svg';
import { ReactSVG } from 'react-svg'

const Term = () => {
  const lastElement = useRef()
  const observer = useRef()
  const [terms, setTerms] = useState('')

  useEffect(() => {
    getFetchData()
  }, [])

  useEffect(() => {
    let callback = function (entries, observer) {
      if (entries[0].IsIntersecting) {
        console.log('div viden')
      }
      console.log('divviden')
    }
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(lastElement.current)
  }, [])

  //  .replace(/<\/?[a-z][a-z0-9]*[^<>]*>/ig, "")
  async function getFetchData() {
    const fetched = await GetFetchData.get()
    setTerms(fetched[0].text.replace(/<\/?[a-z][a-z0-9]*[^<>]*>/ig, ""))
  }
  return (
    <Form>
      <h1>Terms &#38; Conditions</h1>
      <h3>Yuo should obliged to apply the Terms &#38; Conditions to use the service</h3>
      <div className={cl.overflowDiv} >
              {terms}
              <div ref={lastElement} style={{ height: 20, background: 'red' }} />
            </div>
            <div className={cl.agree}>
              <Button ><ReactSVG src={checkmark} />I Agree</Button>
            </div>
      
    </Form>
  )
}

export default Term;