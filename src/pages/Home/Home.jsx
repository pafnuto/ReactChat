import React from 'react';
import './Home.scss'

const Home = () => {
    return (
<div className="home">
<div className="container">
<span className="logo"></span>
<span className="title"></span>
<form>
<input type="email" placeholder="email" />
<input type="password" placeholder="password" />
<button>Войти</button>
</form>
</div>
</div>
    );
};

export default Home;