import React from 'react';
import '../App.css';
import Home from '../Home';
import { Route, Routes } from 'react-router-dom';
import FourOhFour from '../FourOhFour';
import Crops from '../Crops/Crops';
import SignupForm from '../User/SignupForm';
import LoginForm from '../User/LoginForm';
import ProfileForm from '../User/ProfileForm';
import AddCropForm from '../Crops/AddCropForm';
import Garden from '../User/Garden';
import EditCropForm from '../Crops/EditCropForm';

function NavRoutes({ login, signup }) {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crops" element={<Crops />} />
          <Route path="/addcrop" element={<AddCropForm />} />
          <Route path="/editcrop" element={<EditCropForm />} />
          <Route path="/signup" element={<SignupForm signup={signup} />} />
          <Route path="/login" element={<LoginForm login={login} />} />
          <Route path="/garden" element={<Garden />} />
          <Route path="/profile" element={<ProfileForm />} />
          <Route path="*" element={<FourOhFour />} />
        </Routes>
      </main>
    </div>
  );
}

export default NavRoutes;
