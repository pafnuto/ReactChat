import React, { useContext } from 'react';
import './Navbar.scss'
import {signOut} from "firebase/auth"
import { auth } from '../../firebase'
import { AuthContext } from '../Context/AuthContext'

const Navbar = () => {
 const {currentUser} = useContext(AuthContext)

    return (
        <div className='navbar'>
        <span className="logo">Уютненький чат</span>
        <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>Выйти</button>
        </div>
      </div>
    )
  };

export default Navbar;