import React, { useState,useEffect } from 'react';

import './auth.css';
import Login from './Login';
import Register from './Register';
import Logout from './Logout';
function Auth() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogout,setShowLogout] = useState(false);
  const [showRegister,setShowRegister] = useState(false);
  
  useEffect(() => {
    let user = localStorage.getItem('user')
    console.log("user : ",user)
    if(user){
      setShowLogout(true)
      console.log('logout',showLogout)
    }else{
      setShowLogout(false);
    }
    

  },[showLogout])
  const clickLogin = () => {
    
    setShowRegister(false);

  }

  const clickRegister = () => {
    setShowRegister(true)
   
  }
  return (
    <div>
      {showLogout ? <Logout setShowLogout={setShowLogout}/> : <button className='nav-auth' onClick={() => setIsOpen(true)}>Login/Register</button>}
      {isOpen && (
        <div className='auth'>
          
            <div className='auth-links'>
                <a onClick={clickLogin}>Login</a>
                <a onClick={clickRegister}>Register</a>
            </div>
            <hr />
            {showRegister ?<Register setShowRegister={setShowRegister}/> : <Login setShowLogout={setShowLogout}/>}
            
            
            <button className='btn-close' onClick={() => setIsOpen(false)}></button>
          
        </div>
      )}
    </div>
  );
}

export default Auth;