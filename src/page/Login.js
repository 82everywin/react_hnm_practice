import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { authenticateAction } from '../redux/actions/authenticateAction';

const Login = ({isMobile}) => { 

  const [id,setId] = useState('')
  const [pw,setPw] = useState('')

  const authenticate = useSelector((state)=> state.auth.authenticate)
  
  const navigate=useNavigate();

  const dispatch = useDispatch();

  const loginUser = (event) =>{ 
    event.preventDefault();
   // console.log("submit user refresh")
    dispatch(authenticateAction.login(id,pw))
  
    navigate("/");
  }

  return (
    <Container className={isMobile ? 'mobile-login-box' :'login-form-box'}> 
     <Form onSubmit={(event)=>loginUser(event)} >
      <Form.Group className={isMobile ? "mb-3 mobile-login-form":"mb-3 login-form"} controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email Address"  onChange={(event)=>setId(event.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className={isMobile ? "mb-3 mobile-login-form":"mb-3 login-form"} controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"   onChange={(event)=>setPw(event.target.value)}/>
      </Form.Group>
      <Form.Group className={isMobile ? "mb-3 mobile-login-form":"mb-3 login-form"} controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button className={isMobile ? "mb-3 mobile-login-form":"mb-3 login-form"} variant="danger" type="submit">
        로그인
      </Button>
      <div>
        <Button className={isMobile ? "mobile-login-form join":"login-form join"} variant="secondary" type="submit">
          회원가입
        </Button>
      </div>
    </Form>
    </Container>
  )
}

export default Login
