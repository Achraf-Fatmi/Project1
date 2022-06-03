import React, { useEffect } from 'react'
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {  getProfileById } from '../redux/actions/profileActions';
import { Link } from 'react-router-dom';

function CardsComponent({_id, user, phone , description}) {
    const dispatch= useDispatch()


  return (
    <div className='Card' style={{margin:20,}}>
    <Card style={{ width: '18rem', display:"flex",  }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body >
      <Card.Title>{user.name}</Card.Title>
      <Card.Text>
        {description}
      </Card.Text>
      <Card.Text>
        {phone}
      </Card.Text>
      <Link to="/visitprofile" >
      <Button variant="primary" onClick={()=>dispatch(getProfileById(_id))}>Visit Profile</Button>
      </Link>
    </Card.Body>
  </Card>
  </div>
  );
}


export default CardsComponent