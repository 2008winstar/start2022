/**
 * @file 删除字符串中的所有相邻重复项
 * @link https://leetcode-cn.com/problems/remove-all-adjacent-duplicates-in-string/
 */
/**
 * @param {string} s
 * @return {string}
 */
const removeDuplicates = function(s) {
  const stack = [];
  for (let c of s) {
    if (c === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }
  return stack.join('');
};

console.log(removeDuplicates('abbaca'));