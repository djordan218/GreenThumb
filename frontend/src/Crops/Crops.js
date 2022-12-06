import React, { useEffect, useState } from 'react';
import API from '../API/API';
import {
  MDBRow,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from 'mdb-react-ui-kit';
import './Crops.css';
import Crop from './Crop';
import SearchForm from '../User/SearchForm';

function Crops() {
  const [crops, setCrops] = useState([]);

  // runs the search function, updates when crops params change
  useEffect(function getCropsOnMount() {
    console.debug('Getting crops...');
    search();
  }, []);

  async function search(name) {
    let crops = await API.getCrops(name);
    setCrops(crops);
  }

  return (
    <section className="container">
      <MDBCard alignment="center">
        <MDBCardBody>
          <MDBCardTitle>Find a crop and add it to your garden!</MDBCardTitle>
          <MDBCardText>
            You can see all of the details of each crop here. If you want to add
            a crop, you can also do that!
          </MDBCardText>
          <MDBBtn className="me-1" color="success" href="/addcrop">
            Add a crop!
          </MDBBtn>
          <MDBBtn className="me-1" color="success" href="/garden">
            Go to your garden!
          </MDBBtn>
          <SearchForm search={search} />
        </MDBCardBody>
      </MDBCard>
      <MDBRow className="row-cols-1 row-cols-md-4 g-3">
        {crops.map((c) => (
          <Crop key={c.id} c={c} />
        ))}
      </MDBRow>
    </section>
  );
}

export default Crops;
