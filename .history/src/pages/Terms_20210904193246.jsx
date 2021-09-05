import React, { useEffect, useRef, useState } from 'react'
import Form from '../UI/Form/Form';
import GetFetchData from '../API/GetFetchData';
import cl from "../UI/Form/Form.module.css";
import Button from '../UI/button/Button';
import checkmark from '../icons/checkmark.svg';
import { ReactSVG } from 'react-svg'
import { useHistory } from 'react-router-dom';

const Term = () => {
  const lastElement = useRef()
  const observer = useRef()
  const [visibility, setVisibility] = useState('hidden')
  const [terms, setTerms] = useState('')
  const router=useHistory()
  useEffect(() => {
    getFetchData()
  }, [])
  
  let i = 0
  useEffect(() => {
    if (terms) return;
    let callback = function (entries, observer) {
      if (entries[0].isIntersecting) {
        i = i + 1
        console.log(i)
        if (i === 2) setVisibility('visible')
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
        <div ref={lastElement} style={{height:5}} />
      </div>
      <div className={cl.agree}>
        <Button style={{ visibility: visibility }} onClick={() => router.push('/')} ><ReactSVG src={checkmark} />I Agree</Button>
      </div>

    </Form>
  )
}

export default Term;