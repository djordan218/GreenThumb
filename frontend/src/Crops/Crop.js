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
import { useNavigate } from 'react-router-dom';

function Crop({ c }) {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  // fade out function when a user or admin deletes a crop
  function removeFadeOut(el, speed) {
    const seconds = speed / 1000;
    el.style.transition = 'opacity ' + seconds + 's ease';
    el.style.opacity = 0;
    setTimeout(function () {
      el.parentNode.removeChild(el);
    }, speed);
  }

  // DOM manipulates button to avoid page refresh/reload
  // sends data to API to add crop to a user's saved_crops
  async function addCrop(evt) {
    evt.currentTarget.disabled = true;
    evt.currentTarget.innerHTML = 'Added to your garden!';
    await API.addCropToGarden(user.id, c.id);
  }

  // checks with user/admin if they are sure they want to delete a crop
  // if true, sends to backend, removes element and button if that passes
  async function deleteCropFromDB(evt) {
    const confirmBox = window.confirm(
      'Are you sure you want to delete this crop from the database?'
    );
    if (confirmBox === true) {
      await API.deleteCropFromDB(c.id);
      let buttonBelow =
        evt.target.parentElement.parentElement.nextElementSibling;
      buttonBelow.remove();
      removeFadeOut(evt.target.parentElement.parentElement, 500);
    } else {
      console.log('not deleted');
    }
  }

  // sends the user to the edit crop form and sends state to useLocation() to populate form
  async function editCropInDB() {
    navigate('/editcrop', {
      state: {
        id: c.id,
        name: c.name,
        description: c.description,
        days_to_germ: c.days_to_germ,
        days_to_harvest: c.days_to_harvest,
        when_to_harvest: c.when_to_harvest,
        img: c.img,
      },
    });
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
          {user.is_admin === true || c.user_id === user.id ? (
            <>
              <MDBBtn
                color="light"
                className="crop-edit-btn"
                id="crop-edit"
                alt="crop-edit"
                onClick={editCropInDB}
              >
                <img
                  style={{ height: '14px', width: 'auto' }}
                  alt="edit-logo"
                  src="edit.png"
                ></img>
              </MDBBtn>
              <MDBBtn
                color="danger"
                className="crop-delete-btn"
                id="crop-delete"
                alt="crop-delete"
                onClick={deleteCropFromDB}
              >
                <img alt="trash-logo" src="trash.svg"></img>
              </MDBBtn>
            </>
          ) : null}
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
        {!user.saved_crops.includes(c.id) ? (
          <MDBBtn className="me-1 crop-btn" color="success" onClick={addCrop}>
            Add {c.name} to my garden!
          </MDBBtn>
        ) : (
          <MDBBtn
            className="me-1 crop-btn"
            disabled
            onClick={addCrop}
            color="success"
          >
            Already in your garden!
          </MDBBtn>
        )}
      </MDBCol>
    </>
  );
}

export default Crop;
