import React, { useState } from 'react';
import './Register.scss'
import { useNavigate, Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {MdAdd} from "react-icons/md";


const Register = () => {
  const handleSubmit = async (e) => {
    //setLoading(true);
    e.preventDefault();
    const user = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    
    try {
      const auth = getAuth();
      sendSignInLinkToEmail(auth, email, actionCodeSettings)
        .then(() => {
          window.localStorage.setItem('emailForSignIn', email);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });

    return(
    <div className="formReg">
    <div className="wrapperReg">
      <span className="logo">Уютненький чат</span>
      <span className="title">Регистрация</span>
      <form onSubmit={handleSubmit}></form>
        <input required type="text" placeholder="логин" />
        <input required type="email" placeholder="email" />
        <input required type="password" placeholder="пароль" />
        <input type="file" id="fileInput" />
        <button>Регистрация</button>
        <p>
          Нет аккаунта? Не проблема <Link to="/register">Войти</Link>
        </p>
    </div>
  </div>
);
};

export default Register;