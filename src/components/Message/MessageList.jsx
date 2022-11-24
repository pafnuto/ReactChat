import React, { useContext, useEffect, useState } from "react";
import Message from "./Message";

const MessageList = () => {
    return(
    <div className="messageList">
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </div>
  );
};
export default MessageList;