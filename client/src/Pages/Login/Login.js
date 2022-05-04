import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Inputs from '../../Componentes/Inputs'

function Login() {
  const [form,setForm]= useState({})
  const onChangeHandler= (e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const onSubmit= (e)=>{
    e.preventDefault();
    console.log(form)
  }
  return (
    <Form onSubmit={onSubmit} style={{marginLeft: "20%" , marginRight:"20%"}}>

    <Inputs name="email" label="Email" type="text" onChangeHandler={onChangeHandler}/>
  
    <Inputs name="password" label="Password" type="password" onChangeHandler={onChangeHandler}/>

    <div style={{marginBottom:"5px"}}>
    <Link to ="/register"> I don't have an account</Link>
    </div>
    <Button variant="primary" type="submit">
      Connect
    </Button>
  </Form>
  )
}

export default Login