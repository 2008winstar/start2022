/**
 *
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const TreeNode = require('./TreeNode');

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const largestValues = function(root) {
  const result = [];

  if (root) {
    const arr = [root];
    while (arr.length) {
      const len = arr.length;
      const level = [];

      for (let i = 0; i < len; i++) {
        const node = arr.shift();
        level.push(node.val);
        if (node.left) {
          arr.push(node.left);
        }
        if (node.right) {
          arr.push(node.right);
        }
      }
      result.push(Math.max(...level));
    }
  }

  return result;
};