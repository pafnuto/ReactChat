import React from 'react';
import Navbar from '../Navbar/Navbar'
import Search from '../Search/Search'
import ChatList from '../ChatList/ChatList'

const Sidebar = () => {
    return (
    <div>
        <Navbar />
        <Search/>
        <ChatList/> 
    </div>
    );
};

export default Sidebar;