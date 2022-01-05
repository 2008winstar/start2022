
self.onmessage = (msg) => {
  console.log('message from main', msg.data);
  console.log(self);

  postMessage('message sent from worker');
}