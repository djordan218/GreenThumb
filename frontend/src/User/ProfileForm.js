import React, { useState, useContext } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './ProfileForm.css';
import UserContext from '../Hooks/UserContext';
import API from '../API/API';

const ProfileForm = () => {
  const { user } = useContext(UserContext);
  const initialState = {
    username: user.username,
    password: '',
    zone: user.zone,
    email: user.email,
  };

  const [formData, setFormData] = useState(initialState);
  const [toggle, setToggle] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  // user submits to update profile, all fields must be filled out
  // inputs verify inputs are in correct format
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    let res = await API.updateProfile(formData.username, formData);
    console.log(res);
    // reloads window to populate with updated information
    window.location.reload(false);
  }

  // toggles the gardening zone image/button
  function toggleImg() {
    setToggle(!toggle);
  }

  return (
    <div className="container">
      <h3 className="form-h3 home-title">
        Need to make some changes? Change can be good.
      </h3>
      <Form className="profile-form" onSubmit={handleSubmit}>
        <FormGroup floating>
          <Input
            required
            id="username"
            name="username"
            type="text"
            placeholder="Hate your username? You can change it (if you want)."
            value={formData.username}
            onChange={handleChange}
          />
          <Label for="username" className="text-center">
            Hate your username? You can change it (if you want).
          </Label>
        </FormGroup>
        <FormGroup floating>
          <Input
            required
            autoComplete="true"
            id="password"
            name="password"
            type="password"
            placeholder="Want a new password?"
            value={formData.password}
            onChange={handleChange}
          />
          <Label className="text-center" for="password">
            Enter same password or new/updated password.
          </Label>
        </FormGroup>
        <FormGroup floating>
          <Input
            required
            id="zone"
            name="zone"
            type="number"
            placeholder="`Makin' a move or changing zones? Let's get you outta there.`"
            value={formData.zone}
            onChange={handleChange}
          />
          <Label className="text-center" for="zone">
            Makin' a move or changing zones? Let's get you outta there.
          </Label>
          <Button
            className="zone-btn"
            color="outline-success"
            onClick={toggleImg}
          >
            {!toggle ? 'Show them zones.' : 'Hide them zones.'}
          </Button>
        </FormGroup>
        {toggle ? (
          <div>
            <img className="zones-img" alt="zones" src="/zones.jpg" />
          </div>
        ) : null}
        <FormGroup floating>
          <Input
            required
            id="email"
            name="email"
            type="email"
            placeholder="Get a new quirky email?"
            value={formData.email}
            onChange={handleChange}
          />
          <Label className="text-center" for="email">
            Get a new quirky email?
          </Label>
        </FormGroup>
        <FormGroup check row>
          <Button color="success">Change it!</Button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default ProfileForm;
