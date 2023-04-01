/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
const guessNumber = function(n) {
  let left = 1;
  let right = n;

  if (guess(n) === 0) {
    return n;
  }
  if (guess(n) === -1) {
    // 所选的数字比猜的数字小
    return guessNumber(Math.floor(n / 2))
  }
  if (guess(n) === 1) {
    // 所选的数字比猜的数字大
  }
};