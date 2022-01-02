const abortController = new AbortController();
const signal = abortController.signal;

fetch('//example.com', {
  signal
}).then((res) => {
  console.log(res);
}).catch(error => {
  if (error.name === 'AbortError') {
    // thrown by the AbortController API
  } else {
    // process other error
  }
});

abortController.abort();