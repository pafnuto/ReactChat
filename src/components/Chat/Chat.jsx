import React, { useContext } from 'react';
import './Chat.scss'
import {RiCamera2Line, RiFolderAddLine, RiMoreFill } from 'react-icons/ri';
import MessageList from "../Message/MessageList";

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
        <MessageList />
      </div>
    );
  };

export default Chat;