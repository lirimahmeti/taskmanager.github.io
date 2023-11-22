import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from '@uidotdev/usehooks';
import JobClient from './JobClient';
import Job from './Job';


function SearchJobs({text, labelText, location}) {
  const [inputId, setInputId] = useState('')
  const [logedIn, setLogedIn] = useLocalStorage('logedIn', [false])
  const navigate = useNavigate()

  const storeId = (e) =>{
    setInputId(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    if (logedIn[0] === false){
      return (
      <div className='container my-5 pb-4 pt-3 rounded bg-primary text-light'>
        <Form onSubmit={handleSubmit}>
          <Form.Label htmlFor="jobSearch">{labelText}</Form.Label>
        <Form.Control
          type="text"
          id="jobSearch"
          placeholder={text}
          onKeyUp={storeId}/>
        </Form>
       
      </div>
      )
    }else{
      navigate(`/job/${inputId}`)
    }
    
  }
  if (location === undefined){
  return (
    <div className='container my-5 pb-4 pt-3 rounded bg-primary text-light'>
      <Form onSubmit={handleSubmit}>
         <Form.Label htmlFor="jobSearch">{labelText}</Form.Label>
      <Form.Control
        type="text"
        id="jobSearch"
        placeholder={text}
        onKeyUp={storeId}/>
      </Form>
      <Job input_id={inputId}/>
    </div>
  );}else{
    return (
      <div className='container my-5 pb-4 pt-3 rounded bg-primary text-light'>
        <Form onSubmit={handleSubmit}>
           <Form.Label htmlFor="jobSearch">{labelText}</Form.Label>
        <Form.Control
          type="text"
          id="jobSearch"
          placeholder={text}
          onKeyUp={storeId}/>
        </Form>
      </div>
    );
  }
}

export default SearchJobs