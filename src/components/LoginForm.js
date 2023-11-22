import { useLocalStorage } from '@uidotdev/usehooks';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [logedIn, setLogedIn] = useLocalStorage('logedIn', [false])
  const navigate = useNavigate()
  
  const handleFormSubmit = (e)=>{
    e.preventDefault()
    setEmail(e.target[0].value)
    setPassword(e.target[1].value)
    
    if(email === 'admin@email.com' && password === 'admin'){
      navigate('/home')
      setLogedIn([{email, password}])
    }else{
      alert('Email ose password nuk eshte valid')
    }
  }

  return (
    <Form style={{width: '400px'}} onSubmit={handleFormSubmit} className='p-4 shadow rounded'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onSubmit={handleFormSubmit}>
        Submit
      </Button>
    </Form>
  );
}

export default LoginForm