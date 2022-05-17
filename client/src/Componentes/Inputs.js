import React from 'react'
import {Form} from 'react-bootstrap'
import Classnames from 'classnames'

function Inputs({name, label, value, type, onChangeHandler, errors}) {
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>{label}</Form.Label>
      <Form.Control type={type} value={value} name={name} placeholder={label} onChange={onChangeHandler} isInvalid={!!errors}/>
      <Form.Control.Feedback type ='invalid'>
        {errors}
      </Form.Control.Feedback>
    </Form.Group>

  )
}

export default Inputs