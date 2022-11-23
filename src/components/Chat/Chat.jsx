import React, { useContext } from 'react';
import {RiCamera2Line, RiFolderAddLine, RiMoreFill } from 'react-icons/ri';
const Chat = () => {
    return (
        <div className="chat">
        <div className="chatInfo">
          <span>Имя юзера</span>
          <div className="chatIcons">
            <img src={RiCamera2Line} alt="" />
            <img src={RiFolderAddLine} alt="" />
            <img src={RiMoreFill} alt="" />
          </div>
        </div>
      </div>
    );
  };

export default Chat;