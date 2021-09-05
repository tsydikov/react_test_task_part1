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
  const [vis,setVis ]= useState('hidden')
  const [terms, setTerms] = useState('')

  useEffect(() => {
    getFetchData()
  }, [])
  let i =0
  useEffect(() => {
    if (terms) return;
    let callback = function (entries, observer) {
      if (entries[0].isIntersecting) {
        console.log('div viden')
        
        i=i+1
        console.log(i)
        if (i===2) setVis('visible')
      }
    }
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(lastElement.current)
  }, [terms])

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
              <div ref={lastElement}  />
            </div>
            <div className={cl.agree}>
              <Button style={{visibility:vis}} ><ReactSVG src={checkmark} />I Agree</Button>
            </div>
      
    </Form>
  )
}

export default Term;