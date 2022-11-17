import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
    return(
    <div className="formContainer">
    <div className="formWrapper">
      <span className="logo">Lama Chat</span>
      <span className="title">Register</span>
        <input required type="text" placeholder="логин" />
        <input required type="email" placeholder="email" />
        <input required type="password" placeholder="пароль" />
        <input required style={{ display: "none" }} type="file" id="file" />
        <label htmlFor="file">
          <span>Добавить аватар</span>
        </label>
        <button>Регистарция</button>
    </div>
  </div>
);
};

export default Register;