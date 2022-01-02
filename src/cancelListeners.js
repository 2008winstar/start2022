const abortController = new AbortController();
const signal = abortController.signal;

const container = document.getElementById('container');
const mouseenterHandler = () => {};
const mouseoutHandler = () => {};
container.addEventListener('mouseenter', mouseenterHandler, { signal });
container.addEventListener('mouseout', mouseoutHandler, { signal });

abortController.abort();
