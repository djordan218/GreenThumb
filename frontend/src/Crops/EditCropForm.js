import React, { useContext, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Col, Input } from 'reactstrap';
import API from '../API/API';
import UserContext from '../Hooks/UserContext';
import './AddCropForm.css';

const EditCropForm = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  // receiving state/data from /crops page
  const state = useLocation();
  // c = crop
  const c = state.state;
  const initialState = {
    name: c.name,
    description: c.description,
    days_to_germ: c.days_to_germ,
    days_to_harvest: c.days_to_harvest,
    when_to_harvest: c.when_to_harvest,
    img: c.img,
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  // sends data to edit crop in DB, sends user back to the crops page
  async function handleSubmit(e) {
    e.preventDefault();
    formData.days_to_germ = +formData.days_to_germ;
    formData.days_to_harvest = +formData.days_to_harvest;
    await API.editCropInDB(user.id, c.id, formData);
    navigate('/crops');
  }

  return (
    <div className="container">
      <h1 className="form-h1">Want to add a crop? Go on with ya bad self.</h1>
      <Form className="add-crop-form" onSubmit={handleSubmit}>
        <FormGroup row>
          <Label for="name" sm={2}>
            Name of Crop:
          </Label>
          <Col sm={10}>
            <Input
              required
              id="name"
              name="name"
              placeholder="What's the name of your crop?"
              type="text"
              value={formData.name}
              onChange={handleChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="description" sm={2}>
            Crop Description:
          </Label>
          <Col sm={10}>
            <Input
              id="description"
              name="description"
              type="textarea"
              placeholder="Tell us a little about your crop. Just the basic big picture details are fine."
              value={formData.description}
              onChange={handleChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="days_to_germ" sm={2}>
            Days to Germination:
          </Label>
          <Col sm={10}>
            <Input
              required
              id="days_to_germ"
              name="days_to_germ"
              placeholder="How many days does it take from seed to germinate?"
              type="number"
              value={formData.days_to_germ}
              onChange={handleChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="days_to_harvest" sm={2}>
            Days to Harvest:
          </Label>
          <Col sm={10}>
            <Input
              required
              id="days_to_harvest"
              name="days_to_harvest"
              placeholder="About how many days until you harvest your crop?"
              type="number"
              value={formData.days_to_harvest}
              onChange={handleChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="when_to_harvest" sm={2}>
            Harvest Details:
          </Label>
          <Col sm={10}>
            <Input
              id="when_to_harvest"
              name="when_to_harvest"
              type="textarea"
              placeholder="Tell us a little about harvesting. How do you know when it is time to harvest? Any signs to look out for?"
              value={formData.when_to_harvest}
              onChange={handleChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="img" sm={2}>
            Image Link for Crop:
          </Label>
          <Col sm={10}>
            <Input
              id="img"
              name="img"
              placeholder="Got an image in mind for your crop? Link it."
              type="url"
              value={formData.img}
              onChange={handleChange}
            />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col
            sm={{
              offset: 1,
              size: 10,
            }}
          >
            <Button color="success">Submit Crop!</Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
};

export default EditCropForm;
