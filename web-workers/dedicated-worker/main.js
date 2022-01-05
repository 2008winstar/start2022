/**
 * const worker = new Worker(filename, options);
 * options.type: either classic(default), for a classic JavaScript file,
 * or module, to specify an ECMAScript Module (ESM).
 * options.credentials
 * options.name
 *
 */

const worker = new Worker('worker.js');

worker.onmessage = (msg) => {
  console.log('message received from worker', msg.data);
};

worker.postMessage('message sent to worker');