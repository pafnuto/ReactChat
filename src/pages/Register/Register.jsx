import React, { useState } from 'react';
import './Register.scss'
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
    return(
    <div className="formRegister">
    <div className="wrapperRegister">
      <span className="logo">Уютненький чат</span>
      <span className="title">Регистрация</span>
        <input required type="text" placeholder="логин" />
        <input required type="email" placeholder="email" />
        <input required type="password" placeholder="пароль" />
        <input required style={{ display: "none" }} type="file" id="file" />
        <label htmlFor="file">
          <span>Добавить аватар</span>
        </label>
        <button>Регистрация</button>
    </div>
  </div>
);
};

export default Register;