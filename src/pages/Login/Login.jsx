import React from 'react';
import './Login.scss'

const Login = () => {
    return (
        <div className="loginContainer">
        <div className="loginWrapper">
          <span className="logo">Lama Chat</span>
          <span className="title">Login</span>
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <button>Sign in</button>
        </div>
      </div>
    );
};

export default Login;