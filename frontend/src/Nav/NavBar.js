import React, { useState, useContext } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import './NavBar.css';
import UserContext from '../Hooks/UserContext';

function NavBar({ logout }) {
  const [showBasic, setShowBasic] = useState(false);
  const { user } = useContext(UserContext);

  // when a user is logged in, it shows their profile options
  function loggedInNav() {
    return (
      <MDBNavbarItem>
        <MDBDropdown>
          <MDBDropdownToggle tag="a" className="nav-link" role="button">
            {user.username}
          </MDBDropdownToggle>
          <MDBDropdownMenu>
            <MDBDropdownItem link href="/garden">
              my garden.
            </MDBDropdownItem>
            <MDBDropdownItem link href="/profile">
              edit profile.
            </MDBDropdownItem>
            <MDBDropdownItem link href="/" onClick={logout}>
              logout.
            </MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
      </MDBNavbarItem>
    );
  }

  // if user is not logged in, shows login/signup links in navbar
  function loggedOutNav() {
    return (
      <>
        <MDBNavbarItem>
          <MDBNavbarLink active aria-current="page" href="/login">
            login.
          </MDBNavbarLink>
        </MDBNavbarItem>
        <MDBNavbarItem>
          <MDBNavbarLink active aria-current="page" href="/signup">
            signup.
          </MDBNavbarLink>
        </MDBNavbarItem>
      </>
    );
  }

  return (
    <MDBNavbar expand="lg" dark bgColor="success">
      <MDBContainer fluid>
        <MDBNavbarBrand href="/" className="mb-0 h1 navbrand-text">
          <img alt="logo" src="/gtLogoColor.png" height="40"></img>
          green thumb
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showBasic} className="nav-text">
          <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">
            {!user ? loggedOutNav() : loggedInNav()}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default NavBar;
