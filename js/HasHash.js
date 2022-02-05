const DEFAULT_ALGO_SHA256 = 'SHA256';
const DEFAULT_ENCODING_HEX = 'hex';

const HasHash = (keys, options = {
  algorithm: DEFAULT_ALGO_SHA256,
  encoding: DEFAULT_ENCODING_HEX
}) => ({
  calculateHash() {
    const data = keys.map(f => this[f]).join('');
    let hash = 0;
    let i = 0;
    while (i < data.length) {
      hash = ((hash << 5) - hash + data.charCodeAt(i++)) << 0;
    }
    return hash ** 2;
  }
});

exports.HasHash = HasHash;