import React,{useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Inputs from '../../Componentes/Inputs'
import { Registration } from '../../redux/actions/authActions'
function Register() {
  const [form,setForm]= useState({})
  const dispatch=useDispatch()
  const onChangeHandler= (e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const onSubmit= (e)=>{
    e.preventDefault();
    dispatch(Registration(form))
  }
  return (
<Form onSubmit={onSubmit} style={{marginLeft: "20%" , marginRight:"20%"}}>

    <Inputs name="name" label="Name" type="text" onChangeHandler={onChangeHandler}/>

    <Inputs name="email" label="Email" type="text" onChangeHandler={onChangeHandler}/>
  
    <Inputs name="password" label="Password" type="password" onChangeHandler={onChangeHandler}/>

    <Inputs name="confirm" label="Confirm password" type="password" onChangeHandler={onChangeHandler}/>
    <div>
    <Link to ="/login"> I have an account</Link>
    </div>
    <Button variant="primary" type="submit">
      Sign up
    </Button>
  </Form>
  )
}

export default Register