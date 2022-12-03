import React, { useContext, useEffect, useState } from "react";
import Message from "./Message";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const MessageList = () => {
    return(
    <div className="messageList">

    </div>
  );
};
export default MessageList;