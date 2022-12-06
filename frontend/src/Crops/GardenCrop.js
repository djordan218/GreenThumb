import React, { useContext } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCol,
  MDBCardImage,
  MDBRipple,
  MDBBtn,
} from 'mdb-react-ui-kit';
import './Crop.css';
import API from '../API/API';
import UserContext from '../Hooks/UserContext';
import './GardenCrop.css';

function GardenCrop({ c, numCrops, setNumCrops }) {
  const { user } = useContext(UserContext);

  // fadeout function when a user removes crop from their garden
  function removeFadeOut(el, speed) {
    const seconds = speed / 1000;
    el.style.transition = 'opacity ' + seconds + 's ease';
    el.style.opacity = 0;
    setTimeout(function () {
      el.parentNode.removeChild(el);
    }, speed);
  }

  // removes the crop from a user's garden
  // changes state of numCrops
  async function removeCropFromGarden(evt) {
    setNumCrops(numCrops - 1);
    removeFadeOut(evt.target.parentElement, 500);
    await API.removeUserCropFromGarden(user.id, c.id);
  }

  return (
    <>
      <MDBCol className="crop-card">
        <MDBCard
          shadow="0"
          border="dark"
          background="white"
          className="card-info h-100"
        >
          <MDBCardBody className="crop-body">
            <MDBRipple rippleTag="a" className="img-div">
              <MDBCardImage
                src={c.img || '/no-image.png'}
                alt="..."
                position="top"
                className="img-fluid rounded crop-img"
              />
            </MDBRipple>
            <MDBCardTitle className="crop-title">
              {c.name}{' '}
              <div className="crop-days-top">
                Days to germinate: {c.days_to_germ} days
              </div>
              <div className="crop-days">
                Days to harvest: {c.days_to_harvest} days
              </div>
            </MDBCardTitle>
            <div className="scroll">
              <div>{c.description}</div>
              <div className="harvest-title">{c.name} Harvest Info</div>
              <div>{c.when_to_harvest}</div>
            </div>
          </MDBCardBody>
        </MDBCard>
        <MDBBtn
          size="sm"
          className="me-1 crop-btn"
          color="danger"
          onClick={removeCropFromGarden}
        >
          Remove from Garden
        </MDBBtn>
      </MDBCol>
    </>
  );
}

export default GardenCrop;
