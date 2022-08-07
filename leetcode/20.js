/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  const map = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    if (Object.keys(map).includes(current)) {
      stack.push(current);
    } else if (map[stack.pop()] !== current) {
      return false;
    }
  }

  return stack.length === 0;
};