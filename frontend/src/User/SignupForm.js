import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './SignupForm.css';

const SignupForm = ({ signup }) => {
  const navigate = useNavigate();
  const initialState = {
    username: '',
    password: '',
    zone: '',
    email: '',
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

  // user signs up, sends data to API, upon validation it sends user to dashboard
  async function handleSubmit(e) {
    e.preventDefault();
    let result = await signup(formData);
    setFormData(initialState);
    navigate('/');
  }

  // toggles the gardening zone image/button
  function toggleImg() {
    setToggle(!toggle);
  }

  return (
    <div className="container">
      <h2 className="form-h3 home-title">
        Want to improve your green thumb? Give us the deets.
      </h2>
      <Form className="signup-form" onSubmit={handleSubmit}>
        <FormGroup floating>
          <Input
            required
            id="username"
            name="username"
            placeholder="Got a good username in your pocket?"
            type="text"
            value={formData.username}
            onChange={handleChange}
          />
          <Label className="text-center" for="username" sm={2}>
            Put in your super catchy username.
          </Label>
        </FormGroup>
        <FormGroup floating>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Now put in your super secret password."
            value={formData.password}
            onChange={handleChange}
          />
          <Label className="text-center" for="password" sm={2}>
            Got a super secret password?
          </Label>
        </FormGroup>
        <FormGroup floating>
          <Input
            required
            id="zone"
            name="zone"
            placeholder="What's your gardening zone? Hint: it's between 1 - 13."
            type="number"
            value={formData.zone}
            onChange={handleChange}
          />
          <Label className="text-center" for="zone" sm={2}>
            Know your gardening zone? Hint: it's between 1 & 13.
          </Label>
          <Button
            color="outline-success"
            className="zone-btn"
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
            placeholder="We accept any and all quirky emails."
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Label className="text-center" for="email" sm={2}>
            What is your super awesome email?
          </Label>
        </FormGroup>
        <FormGroup check row>
          <Button color="success">Sign me up!</Button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default SignupForm;
