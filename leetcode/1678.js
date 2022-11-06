/**
 * @param {string} command
 * @return {string}
 */
const interpret = function(command) {
  let res = '';
  let temp = '';
  for (let i = 0; i < command.length; i++) {
    const char = command[i];
    if (char === 'G') {
      res += 'G';
    } else if (char === ')') {
      if (temp === '(') {
        res += 'o';
        temp = '';
      } else if (temp === '(al') {
        res += 'al';
        temp = '';
      }
    } else {
      temp += char;
    }
  }
  return res;
};

console.log(interpret('command = "G()(al)"'));