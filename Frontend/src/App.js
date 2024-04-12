import React, { useState } from 'react';
import ChatDisplay from './ChatDisplay';
import ChatInput from './ChatInput';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages([...messages, { text: message, sender: 'user' }]);
    // Send user message to backend API
    fetch('http://localhost:3001/api/send-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      setMessages([...messages, { text: data.message, sender: 'bot' }]);
    })
    .catch(error => console.error('Error:', error));
  };
  

  return (
    <div className="app-container">
      <h1 className='Title'>AI Chat Assistant</h1>
      <ChatInput addMessage={addMessage} />
      <ChatDisplay messages={messages} />
    </div>
  );
}

export default App;
