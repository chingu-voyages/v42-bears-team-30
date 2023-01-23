import React from 'react'

const Logout = ({setShowLogout}) => {

  const logoutUser = () => {
    localStorage.removeItem("user")
    setShowLogout(false)
  }

  return (
    <>
        <button 
          className='nav-auth'
          onClick={logoutUser}
        >Log out</button>
    </>
  )
}

export default Logout