import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./Home.css"

function Home({user}) {
  return (
    <div className="MainContainer">
      <div className="DescriptionContainer">
        <div className="description">
          As gamers we are always looking for a chance to improve, to get to the
          next stage of our gaming experience.
          <br />
          In here you get the oppurtinity to seize that chance. <br />
          We offer a network of gamers like yourself and coaches that would help
          you improve and climb through the ranks to have a better and enjoyable
          experience.
        </div>
        {!user.isConnected ? (
          <>
            <div className="RegisterPage">
              <h1>Join Our Community</h1>

              <Link to="/register">
                <Button style={{ width: "300px" }} variant="warning">
                  Create Your Account
                </Button>{" "}
              </Link>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Home