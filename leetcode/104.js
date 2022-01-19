/**
 * @file 二叉树的最大深度
 * @link https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
 * @field 二叉树
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function(root) {
  const result = [];

  if (root) {
    const arr = [root];
    while (arr.length) {
      const level = [];
      const len = arr.length;

      for (let i = 0; i < len; i++) {
        const node = arr.shift();
        if (node.left) {
          arr.push(node.left);
        }
        if (node.right) {
          arr.push(node.right);
        }
        level.push(node.val);
      }
      result.push(level);
    }
  }

  return result.length;
};