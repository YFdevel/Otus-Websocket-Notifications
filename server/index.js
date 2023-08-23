import { WebSocketServer } from 'ws';


const wss = new WebSocketServer({ port: 5001 });

wss.on('connection', function connection(ws) {
    ws.on('error', console.error);

    ws.on('message', function message(data) {
        console.log('received: %s', data);
    });

    const interval=setInterval(() => {
        ws.send(new Date().toLocaleString());
    }, 5000)
});
