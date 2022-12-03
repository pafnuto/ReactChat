import React, { useState } from "react";
import './Login.scss'
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";


const Login = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (error) {
      setError(true);
    }
  };

    return (
        <div className="loginContainer">
        <div className="loginWrapper">
          <span className="logo">Уютненький чат</span>
          <span className="title">Логин</span>
          <form onSubmit={handleSubmit}></form>
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <button>Войти</button>
            <p>Нет аккаунта? Не беда! <Link to="/register">Регистрация</Link></p>
        </div>
      </div>
    );
};

export default Login;