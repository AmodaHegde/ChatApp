import React, { useState } from 'react';
import './ChatInput.css';


function ChatInput({ addMessage }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    addMessage(input);
    setInput('');
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <div className='chat-input-container'>
      <input className='chat-input'
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
      />
      <button type="submit" className='send-button'>Send</button>
      </div>
    </form>
    </div>
  );
}

export default ChatInput;
