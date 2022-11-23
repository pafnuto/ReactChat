import React from 'react';
import Chat from '../../components/Chat/Chat'
import Sidebar from '../../components/Sidebar/Sidebar';
import './Home.scss'

const Home = () => {
    return (
    <div className='home'>
      <div className="homeWrap">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}

export default Home;