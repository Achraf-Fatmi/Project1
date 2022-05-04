import React from 'react'
import {Form} from 'react-bootstrap'

function Inputs({name,label, type, onChangeHandler}) {
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>{label}</Form.Label>
      <Form.Control type={type} name={name} placeholder={label} onChange={onChangeHandler} />
    </Form.Group>

  )
}

export default Inputs