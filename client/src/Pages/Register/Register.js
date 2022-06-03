import React,{useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Inputs from '../../Componentes/Inputs'
import { Registration } from '../../redux/actions/authActions'
import './Register.css'
function Register() {
  const [form,setForm]= useState({})
  const dispatch=useDispatch()
  const navigate= useNavigate()
 const errors = useSelector(state=> state.errors)
  const onChangeHandler= (e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const onSubmit= (e)=>{
    e.preventDefault();
    dispatch(Registration(form, navigate))
  }
  return (
  <div className='RegisterContainer'>
<Form onSubmit={onSubmit} style={{marginLeft: "20%" , marginRight:"20%"}}>

    <Inputs name="name" label="Name" type="text" onChangeHandler={onChangeHandler} errors={errors.name}/>

    <Inputs name="email" label="Email" type="text" onChangeHandler={onChangeHandler} errors={errors.email}/>
  
    <Inputs name="password" label="Password" type="password" onChangeHandler={onChangeHandler} errors={errors.password}/>

    <Inputs name="confirm" label="Confirm password" type="password" onChangeHandler={onChangeHandler} errors={errors.confirm}/>
    <div>
    <Link to ="/login"> I have an account</Link>
    </div>
    <Button variant="primary" type="submit">
      Sign up
    </Button>
  </Form>
  </div>
  )
}

export default Register