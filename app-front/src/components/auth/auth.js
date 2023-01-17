import React, { useState } from 'react';

import './auth.css';

function Auth() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    // Perform authentication here using the email and password stored in state
  };

  return (
    <div>
      <button className='nav-auth' onClick={() => setIsOpen(true)}>Login/Register</button>
      {isOpen && (
        <div className='auth'>
            <div className='auth-links'>
                <a>Login</a>
                <a>Register</a>
            </div>
            <hr />
            <form onSubmit={handleSubmit}>
                <input
                className='form-control'
                type="email"
                placeholder="Email"
                value={email}
                onChange={event => setEmail(event.target.value)}
                />
                <input
                className='form-control'
                type="password"
                placeholder="Password"
                value={password}
                onChange={event => setPassword(event.target.value)}
                />
                <button className='btn-login' type="submit">Log In</button>
                <button className='btn-close' onClick={() => setIsOpen(false)}></button>
            </form>
        </div>
      )}
    </div>
  );
}

export default Auth;