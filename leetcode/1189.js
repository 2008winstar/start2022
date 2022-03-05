/**
 * @param {string} text
 * @return {number}
 */
const maxNumberOfBalloons = function(text) {
  let count = 0;
  const map = {
    b: 1,
    a: 1,
    l: 2,
    o: 2,
    n: 1
  };
  const chars = Object.keys(map);

  const txtMap = {};
  for (let c of text) {
    if (map[c]) {
      if (txtMap[c]) {
        txtMap[c] += 1;
      } else {
        txtMap[c] = 1;
      }
    }
  }

  let hasNext = true;

  while (true) {
    for (let char of chars) {
      if (txtMap[char] >= map[char]) {
        txtMap[char] -= map[char];
      } else {
        hasNext = false;
        break;
      }
    }

    if (hasNext) {
      count += 1;
    } else {
      break;
    }
  }

  return count;
};

console.log(maxNumberOfBalloons('nlaebolko'));
console.log(maxNumberOfBalloons('loonbalxballpoon'));
console.log(maxNumberOfBalloons('leetcode'));