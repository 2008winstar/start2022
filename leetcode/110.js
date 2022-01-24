/**
 * @file 平衡二叉树
 * @link https://leetcode-cn.com/problems/balanced-binary-tree/
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
 * @return {boolean}
 */
const isBalanced = function(root) {
  let low = 0;
  let high = 0;

  if (root) {
    const arr = [root];
    while (arr.length) {
      const len = arr.length;
      const level = [];
      for (let i = 0; i < len; i++) {
        const node = arr[i];

      }
    }
  }
};