import React from 'react'
import { Button } from 'react-bootstrap'
import "./Home.css"

function Home() {
  return (
    <div className='MainContainer'>
      <div className='DescriptionContainer'>
        

      </div>
      <div>
        <h2>
          Join Our Community
        </h2>
        <Button variant="warning">Create Your Account</Button>{' '}
      </div>
    </div>
  )
}

export default Home