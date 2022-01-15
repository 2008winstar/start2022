/**
 * @file 二叉树的层序遍历 II
 * @link https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/
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
 * @return {number[][]}
 */
const levelOrderBottom = function(root) {
  const result = [];

  if (root) {
    const queue = [root];
    while (queue.length) {
      const len = queue.length;
      const level = [];
      for (let i = 0; i < len; i++) {
        const node = queue.shift();
        level.push(node.val);
        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
      }
      result.push(level);
    }
  }
  return result.reverse();
};

const node15 = new TreeNode(15);
const node7 = new TreeNode(7);
const node20 = new TreeNode(20, node15, node7);
const node9 = new TreeNode(9);
const node3 = new TreeNode(3, node9, node20);
const node1 = new TreeNode(1);

console.log(levelOrderBottom(node3))
console.log(node1);