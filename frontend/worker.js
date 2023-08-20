const url = 'ws://localhost:5001';

let socket;

self.addEventListener('message', (event) => {
  if (event.data === 'start') {
      socket = new WebSocket(url);
    socket.addEventListener('message', (event) => {
        socket.send(`Данные с сервера ${event.data} получены`)
      postMessage({ type: 'message', payload: event.data })
    })
  }
   if (event.data==='stop')
     {
        socket.close();
         postMessage({ type: 'close'})

  }
});
