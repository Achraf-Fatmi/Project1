import React from 'react'
import {  Navbar, Nav, NavDropdown,Container, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function CompNavbar ({user}) {
  return (
    <Navbar bg="light" expand="lg" >
  <Container fluid style={{marginBottom:'40px'}}>
    <Navbar.Brand>
      <Link to= "/">
      League Coachings
      </Link>
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link >
        <Link to="/">Home</Link>
          </Nav.Link>
        <Nav.Link>
          <Link to="/profile"> Profile</Link>
          </Nav.Link>
        <NavDropdown title="More" id="navbarScrollingDropdown">
          <NavDropdown.Item>
          <Link to="/coahces" >Coaches</Link> 
            </NavDropdown.Item>
          <NavDropdown.Item >
            <Link to="/users" >Users</Link> 
          </NavDropdown.Item>

        </NavDropdown>

      </Nav>
      
      <Form className="d-flex">
      
        {
          user.isConnected === true? (
            <Form.Label style={{color:"blueviolet", margin:"5px"}}>
             {user.role}
            </Form.Label>) : ''
        }
        <Button variant="outline-success">Logout</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default CompNavbar