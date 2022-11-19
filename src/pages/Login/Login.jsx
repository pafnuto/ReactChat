import React from 'react';
import './Login.scss'

const Login = () => {
    return (
        <div className="loginContainer">
        <div className="loginWrapper">
          <span className="logo">Уютненький чат</span>
          <span className="title">Логин</span>
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <button>Войти</button>
        </div>
      </div>
    );
};

export default Login;