const abortController = new AbortController();
const signal = abortController.signal;

fetch('//example.com', {
  signal
}).then((res) => {
  console.log(res);
});

abortController.abort();