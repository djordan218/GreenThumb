import React, { useEffect, useState } from 'react';
import NavBar from './Nav/NavBar';
import NavRoutes from './Nav/NavRoutes';
import { BrowserRouter } from 'react-router-dom';
import { decodeToken } from 'react-jwt';
import './App.css';
import API from './API/API';
import UserContext from './Hooks/UserContext';
import { Oval } from 'react-loader-spinner';

function App() {
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [user, setUser] = useState(null);
  // pulls token from localStorage if present
  let storedToken = localStorage.getItem('green_thumb_token');
  const [token, setToken] = useState(storedToken);

  console.debug('***USER***', user, '***TOKEN***', token);

  useEffect(
    // loads info, gets current user, shows loading wheel if info is not loaded
    function loadInfo() {
      async function getCurrentUser() {
        if (token) {
          try {
            API.token = token;
            setToken(token);
            const { username } = decodeToken(token);
            let currentUser = await API.getCurrentUser(username, token);
            setUser(currentUser);
          } catch {
            console.log('no token');
          }
        }
        setInfoLoaded(true);
      }
      getCurrentUser();
    },
    [token]
  );

  // logs user out for the entire site, removes token from localStorage
  function logout() {
    console.log('logging out');
    localStorage.removeItem('green_thumb_token');
    setToken(null);
    setUser(null);
  }

  // user sign up, sends to API and sets localStorage values
  async function signup(data) {
    console.log('signing up', data);
    try {
      let token = await API.signup(data);
      const payload = decodeToken(token);
      localStorage.setItem('green_thumb', { payload });
      localStorage.setItem('green_thumb_token', { token });
      setToken(token);
      return { result: 'success', token };
    } catch (errors) {
      console.error('signup failed', errors);
      return { success: false, errors };
    }
  }

  async function login(data) {
    try {
      let token = await API.login(data);
      const payload = decodeToken(token);
      localStorage.setItem('green_thumb', JSON.stringify(payload));
      localStorage.setItem('green_thumb_token', JSON.stringify(token));
      setToken(token);
      return { result: 'success', token };
    } catch (errors) {
      console.error('login failed', errors);
      return { success: false, errors };
    }
  }

  // this shows the loading wheel component if infoLoaded is set to false
  if (!infoLoaded)
    return (
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Oval
          height={200}
          width={200}
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={5}
          strokeWidthSecondary={2}
        />
      </div>
    );

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser }}>
          <NavBar logout={logout} />
          <NavRoutes login={login} signup={signup} />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
