import React from 'react';
import './ChatDisplay.css'

function ChatDisplay({ messages }) {
  return (
    <div className="chat-display">
      {messages.map((msg, index) => (
        <div key={index} className={`message ${msg.sender}`}>
          Bot: {msg.text}
        </div>
      ))}
    </div>
  );
}

export default ChatDisplay;
