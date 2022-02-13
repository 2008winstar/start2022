/**
 * 将一个十进制数转换为指定进制的数
 * @param {number} num
 * @param {number} base 指定目标数的进制，范围（2~36）
 * @return {string}
 */
const baseConverter = (num, base) => {
  const stack = [];
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let numToTurn = num;
  let str = '';

  if (!(base >= 2 && base <= 36)) {
    return str;
  }

  while (numToTurn > 0) {
    stack.push(numToTurn % base);
    numToTurn = Math.floor(numToTurn / base);
  }

  while (stack.length) {
    str += digits[stack.pop()];
  }

  return str;
}

console.log(baseConverter(11, 16))