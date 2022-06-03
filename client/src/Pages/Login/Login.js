import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Inputs from '../../Componentes/Inputs'
import { LoginAction } from '../../redux/actions/authActions'
import './Login.css'

function Login() {
  const dispatch=useDispatch()
  const navigate= useNavigate()
 const errors = useSelector(state=> state.errors)
  const [form,setForm]= useState({})
  const onChangeHandler= (e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const onSubmit= (e)=>{
    e.preventDefault();
    dispatch (LoginAction(form,navigate))
  }
  return (
    <div className='LoginContainer'>
    <Form onSubmit={onSubmit} style={{marginLeft: "20%" , marginRight:"20%"}}>

    <Inputs name="email" label="Email" type="text" onChangeHandler={onChangeHandler} errors={errors.email}/>
  
    <Inputs name="password" label="Password" type="password" onChangeHandler={onChangeHandler} errors={errors.password}/>

    <div style={{marginBottom:"5px"}}>
    <Link to ="/register"> I don't have an account</Link>
    </div>
    <Button variant="primary" type="submit">
      Connect
    </Button>
  </Form>
  </div>
  )
}

export default Login