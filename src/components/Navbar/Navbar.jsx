import React, { useContext } from 'react';

const Navbar = () => {
    return (
        <div className='navbar'>
        <span className="logo">Уютненький чат</span>
        <div className="user">
          <img alt="" />
          <span>Имя в чате</span>
          <button>Выйти</button>
        </div>
      </div>
    )
  };

export default Navbar;