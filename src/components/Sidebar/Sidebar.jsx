import React from 'react';
import './Sidebar.scss'
import Navbar from '../Navbar/Navbar'
import Search from '../Search/Search'
import ChatList from '../Chat/ChatList'

const Sidebar = () => {
    return (
    <div className='sidebar'>
        <Navbar />
        <Search/>
        <ChatList/> 
    </div>
    );
};

export default Sidebar;