const isIterable = object => typeof object[Symbol.iterator] === 'function';
const isAsyncIterable = object => typeof object[Symbol.asyncIterator] === 'function'