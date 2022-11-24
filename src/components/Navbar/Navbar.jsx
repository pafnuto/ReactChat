import React, { useContext } from 'react';
import './Navbar.scss'
import { AuthContext } from '../Firebase/AuthContext'

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)
    return (
        <div className='navbar'>
        <span className="logo">Уютненький чат</span>
        <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        </div>
      </div>
    )
  };

export default Navbar;