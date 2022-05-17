import React from 'react'
import {  Navbar, Nav, NavDropdown,Container, Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Logout } from '../redux/actions/authActions'
import { GetProfile } from '../redux/actions/profileActions'

function CompNavbar ({user}) {
  const dispatch = useDispatch()
  const LogoutHandler =() => {
    dispatch(Logout())
  }

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
        {
          user.isConnected=== true?(
          <>
          <Nav.Link>
          <Link to="/profile" onClick={()=>dispatch(GetProfile())}> Profile</Link>
          </Nav.Link>
        <NavDropdown title="More" id="navbarScrollingDropdown">
          <NavDropdown.Item>
          <Link to="/coahces" >Coaches</Link> 
            </NavDropdown.Item>
          <NavDropdown.Item >
            <Link to="/users" >Users</Link> 
          </NavDropdown.Item>

        </NavDropdown>
        </>
        ): ''
        }
        {
          user.role=== "ADMIN"?(
            <Nav.Link>
            <Link to="/admin"> Manage Users</Link>
            </Nav.Link>
          ): ""
        }

      </Nav>
      
      <Form className="d-flex">
      
        {
          user.isConnected === true? (
            <Form.Label style={{color:"blueviolet", margin:"5px"}}>
             {user.role}
            </Form.Label>) : ''
        }

        {
          !user.isConnected? (
            <>
         <Link to='/register'>
           <Button variant="outline-success" style={{margin:'3px'}}>Register</Button>
           </Link>
        <Link to='/login'> 
        <Button variant="outline-success"style={{margin:'3px'}}>Login</Button>
        </Link>
            </>
          ):(
            <Link to='/#' onClick={LogoutHandler}> <Button variant="outline-success"style={{margin:'3px'}}>Logout</Button></Link>
          )
        }
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default CompNavbar