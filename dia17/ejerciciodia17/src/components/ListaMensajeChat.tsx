import React, { useState, useRef } from 'react';

const ListaMensajeChat: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = () => {
    if (input.trim() === '') return;
    setMessages((prevMessages) => [...prevMessages, input]);
    setInput('');
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ width: '300px', height: '400px', border: '1px solid #ccc', overflowY: 'auto', padding: '10px' }}>
      {messages.map((msg, index) => (
        <div key={index}>{msg}</div>
      ))}
      <div ref={messagesEndRef} />
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSendMessage();
            scrollToBottom();
          }
        }}
      />
      <button
        onClick={() => {
          handleSendMessage();
          scrollToBottom();
        }}
      >
        Enviar
      </button>
    </div>
  );
};

export default ListaMensajeChat;