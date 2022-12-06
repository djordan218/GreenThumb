import React, { useContext } from 'react';
import {
  MDBRow,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from 'mdb-react-ui-kit';
import './Home.css';
import UserContext from './Hooks/UserContext';
import Garden from './User/Garden';

function Home() {
  const { user } = useContext(UserContext);

  // if a user is logged in, it will show their dashboard/garden
  function loggedIn() {
    return (
      <div>
        <Garden />
      </div>
    );
  }

  // if no user is in localStorage, the signup/login interface will appear
  function loggedOut() {
    return (
      <div className="container">
        <div className="home-title">Welcome to Green Thumb!</div>
        <MDBRow className="row-cols-1 row-cols-md-4 g-4">
          <MDBCard className="mb-3" style={{ maxWidth: '500px' }}>
            <a href="/signup">
              <MDBCardImage position="top" src="/sign-up.png" />
            </a>
            <MDBCardBody>
              <MDBCardTitle>Sign up for an account!</MDBCardTitle>
              <MDBCardText>
                It's as easy as putting in your basic account info and email and
                your gardening zone! Once you're a bonafide user, you can search
                for crops and get to work!
              </MDBCardText>
              <MDBBtn className="signup-btn" color="success" href="/signup">
                Sign up!
              </MDBBtn>
              <MDBBtn className="login-btn" color="success" href="/login">
                Log in!
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
          <MDBCard className="mb-3" style={{ maxWidth: '500px' }}>
            <MDBCardImage position="top" src="/search.png" />
            <MDBCardBody>
              <MDBCardTitle>Search for your crop!</MDBCardTitle>
              <MDBCardText>
                We have lots of crops to choose from and you can search for a
                specific crop. If you can't find what you're looking for, you
                can add one of your own and add the details that we need to make
                your thumb green!
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
          <MDBCard className="mb-3" style={{ maxWidth: '500px' }}>
            <MDBCardImage position="top" src="/add-button.png" />
            <MDBCardBody>
              <MDBCardTitle>Add the crop to your garden!</MDBCardTitle>
              <MDBCardText>
                Once you find the crop you're looking for, you can add it to
                your profile (aka garden). You'll be able to reference important
                details about the crop and know when it's time to harvest!
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
          <MDBCard className="mb-3" style={{ maxWidth: '500px' }}>
            <MDBCardImage position="top" src="/gardening.png" />
            <MDBCardBody>
              <MDBCardTitle>Water & Wait!</MDBCardTitle>
              <MDBCardText>
                Take care of those crops, reap the benefits, feel the warm dirt
                under your hand. Remember gardening should be fun and those
                fruits and veggies ALWAYS taste better when they are home grown!
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBRow>
      </div>
    );
  }

  return <>{!user ? loggedOut() : loggedIn()}</>;
}

export default Home;
