import React, { useContext, useEffect, useState } from "react";
import './Chat.scss'
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";


const ChatList = () => {
    return (
        <div className="chatList">
          <div className="userChatInfo">
            <span>displayName</span>
            <p>Message</p>
          </div>
        </div>
      )}

export default ChatList;