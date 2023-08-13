/* eslint-disable react/no-array-index-key */
import React from "react";
import useMessages from "../../components/useMessages";

const Chat: React.FC = () => {
  const chatroomId = 1;
  // use Roger's custom hook to establish web socket connection and GET messages
  const messages = useMessages(chatroomId);

  return (
    <div>
      <h2>Messages:</h2>
      {messages.map((message, index) => (
        <p key={index}>{message.content}</p>
      ))}
    </div>
  );
};

export default Chat;
