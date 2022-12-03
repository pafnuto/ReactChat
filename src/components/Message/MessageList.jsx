import React, { useContext, useEffect, useState } from "react";
import './Message.scss';
import Message from "./Message";
import { db } from "../../firebase";
import { ChatContext } from '../Context/ChatContext'
import { doc, onSnapshot } from "firebase/firestore";

const MessageList = () => {
  const [messageList, setMessageList] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessageList(doc.data().MessageList);
    });

    return () => {
      unsubscribe();
    };
  }, [data.chatId]);

  return (
    <div className="messageList">
      {messageList.map((message) => (
        <Message message={message} key={message.id} />
      ))}
    </div>
  );
};
export default MessageList;