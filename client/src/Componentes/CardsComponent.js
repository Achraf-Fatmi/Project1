import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { DeleteProfile } from '../redux/actions/profileActions';

function CardsComponent({_id, user, phone , description}) {
    const dispatch= useDispatch()
    const DeleteHandler = (id) => {
      dispatch(DeleteProfile(id));
    };
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
      <Button variant="primary">Visit Profile</Button>
    </Card.Body>
  </Card>
  </div>
  );
}


export default CardsComponent