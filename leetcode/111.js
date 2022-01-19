/**
 * @file 二叉树的最小深度
 * @link https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
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
const minDepth = function(root) {
  if (!root) {
    return 0;
  }
  if (root.left && root.right) {
    return 1 + Math.min(minDepth(root.left), minDepth(root.right));
  }
  if (root.left) {
    return 1 + minDepth(root.left);
  }
  if (root.right) {
    return 1 + minDepth(root.right);
  }
  return 1;
};

// test
const TreeNode = require('./TreeNode');
const node15 = new TreeNode(15);
const node7 = new TreeNode(7);
const node20 = new TreeNode(20, node15, node7);
const node9 = new TreeNode(9);
const node3 = new TreeNode(3, node9, node20);

console.log(minDepth(node3));