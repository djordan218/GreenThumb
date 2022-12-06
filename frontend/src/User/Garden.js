import React, { useContext, useEffect, useState } from 'react';
import ZoneAPI from '../API/ZoneAPI';
import UserContext from '../Hooks/UserContext';
import { MDBRow, MDBBtn } from 'mdb-react-ui-kit';
import './Garden.css';
import API from '../API/API';
import GardenCrop from '../Crops/GardenCrop';

function Garden() {
  const { user } = useContext(UserContext);
  const [crops, setCrops] = useState([]);
  const [userCrops, setUserCrops] = useState([]);
  const [numCrops, setNumCrops] = useState(user.saved_crops.length);
  let userZone = user.zone;

  // loads a user's saved crops on mount
  // loops through array and sends an API call for each crop and loads garden dashboard
  useEffect(() => {
    async function getCrops() {
      let cropArr = user.saved_crops;
      for (let i = 0; i < cropArr.length; i++) {
        let res = await API.getCropById(cropArr[i]);
        setCrops((crops) => [...crops, res]);
      }
    }
    getCrops();
  }, [userCrops, user.saved_crops]);

  return (
    <div className="container">
      <div className="home-title">Welcome to your garden!</div>
      <div className="zone-title">You are in Zone {userZone}!</div>
      <div>{ZoneAPI(userZone)}</div>
      <MDBBtn className="crop-btn" color="success" href="/crops">
        Show me some crops!
      </MDBBtn>
      <MDBBtn className="crop-btn" color="success" href="/addcrop">
        Add a crop of your own!
      </MDBBtn>
      {numCrops === 0 ? (
        <div className="home-title">You have no crops in your garden!</div>
      ) : (
        <div className="home-title">Here are your {numCrops} crops!</div>
      )}
      <MDBRow className="row-cols-1 row-cols-md-4 g-3">
        {crops.map((c) => (
          <GardenCrop
            key={c.id}
            c={c}
            numCrops={numCrops}
            setNumCrops={setNumCrops}
          />
        ))}
      </MDBRow>
    </div>
  );
}

export default Garden;
