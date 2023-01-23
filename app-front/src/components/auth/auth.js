import React, { useState } from 'react';

import './auth.css';
import Login from './Login';
import Register from './Register';
function Auth() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showLogin,setShowLogin] = useState(true);
  const [showRegister,setShowRegister] = useState(false);
  
  const handleSubmit = event => {
    event.preventDefault();
    // Perform authentication here using the email and password stored in state
  };

  const clickLogin = () => {
    setShowLogin(true);
    setShowRegister(false);

  }

  const clickRegister = () => {
    setShowRegister(true)
    setShowLogin(false)
  }
  return (
    <div>
      <button className='nav-auth' onClick={() => setIsOpen(true)}>Login/Register</button>
      {isOpen && (
        <div className='auth'>
          
            <div className='auth-links'>
                <a onClick={clickLogin}>Login</a>
                <a onClick={clickRegister}>Register</a>
            </div>
            <hr />
            {showRegister ?<Register setShowRegister={setShowRegister}/> : <Login/>}
            
              
            <button className='btn-close' onClick={() => setIsOpen(false)}></button>
          
        </div>
      )}
    </div>
  );
}

export default Auth;