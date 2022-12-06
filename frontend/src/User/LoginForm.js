import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './LoginForm.css';

const LoginForm = ({ login }) => {
  const navigate = useNavigate();
  const initialState = {
    username: '',
    password: '',
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  // once a user submits and backend verifies, sends them to their dashboard
  async function handleSubmit(e) {
    e.preventDefault();
    let result = await login(formData);
    console.log(result);
    setFormData(initialState);
    navigate('/');
  }

  return (
    <div className="container">
      <h2 className="form-h3 home-title">
        Log in and let's put some green on that thumb!
      </h2>
      <Form className="login-form" onSubmit={handleSubmit}>
        <FormGroup floating>
          <Input
            required
            id="username"
            name="username"
            placeholder="Smack that username in here."
            type="text"
            value={formData.username}
            onChange={handleChange}
          />
          <Label className="text-center" for="username">
            Smack that username in here.
          </Label>
        </FormGroup>
        <FormGroup floating>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="What's your classified secret code password?"
            value={formData.password}
            onChange={handleChange}
          />
          <Label className="text-center" for="password">
            What's your classified secret code password?
          </Label>
        </FormGroup>
        <FormGroup check row>
          <Button color="success">Log me in!</Button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default LoginForm;
