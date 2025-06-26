import { useEffect, useState, useRef } from 'react';

function App() {
  const [name, setName] = useState('');
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const ws = useRef(null);

  useEffect(() => {
    if (!name) return;

    ws.current = new WebSocket('wss://TU_BACKEND_RENDER_URL');

    ws.current.onopen = () => {
      ws.current.send(JSON.stringify({ type: 'join', name }));
    };

    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'message') {
        setMessages(prev => [...prev, `${data.name}: ${data.content}`]);
      } else if (data.type === 'notice') {
        setMessages(prev => [...prev, `🔔 ${data.content}`]);
      } else if (data.type === 'users') {
        setUsers(data.users);
      }
    };

    return () => ws.current.close();
  }, [name]);

  const sendMessage = () => {
    if (input.trim() && ws.current) {
      ws.current.send(JSON.stringify({ type: 'message', content: input }));
      setInput('');
    }
  };

  if (!name) {
    return (
      <div>
        <h2>Ingresa tu nombre:</h2>
        <input onChange={e => setName(e.target.value)} />
      </div>
    );
  }

  return (
    <div>
      <h3>Conectado como: {name}</h3>
      <h4>Usuarios conectados: {users.join(', ')}</h4>
      <ul>
        {messages.map((msg, i) => <li key={i}>{msg}</li>)}
      </ul>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={sendMessage}>Enviar</button>
    </div>
  );
}

export default App;