const WebSocket = require('ws');
const PORT = process.env.PORT || 8080;
const server = new WebSocket.Server({ port: PORT });

let clients = [];

function broadcast(data) {
  clients.forEach(c => {
    if (c.ws.readyState === WebSocket.OPEN) {
      c.ws.send(JSON.stringify(data));
    }
  });
}

server.on('connection', (ws) => {
  let user = { ws, name: null };
  clients.push(user);

  ws.on('message', (msg) => {
    const data = JSON.parse(msg);

    if (data.type === 'join') {
      user.name = data.name;
      broadcast({ type: 'notice', content: `${user.name} se ha unido.` });
      broadcast({ type: 'users', users: clients.map(c => c.name).filter(Boolean) });
    }

    if (data.type === 'message') {
      broadcast({ type: 'message', name: user.name, content: data.content });
    }
  });

  ws.on('close', () => {
    clients = clients.filter(c => c.ws !== ws);
    broadcast({ type: 'notice', content: `${user.name} se ha desconectado.` });
    broadcast({ type: 'users', users: clients.map(c => c.name).filter(Boolean) });
  });
});

console.log(`Servidor WebSocket en puerto ${PORT}`);
