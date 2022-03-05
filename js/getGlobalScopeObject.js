const theGlobalScopeObject =
  (typeof globalThis !== 'undefined') ? globalThis
  : (typeof global !== 'undefined') ? global  // Node.js
  : (typeof window !== 'undefined') ? window  // browser main thread
  : (typeof self !== 'undefined') ? self      // browser worker thread
  : (typeof self !== 'undefined') ? self      // browser worker thread
  : (new Function('return this'))();