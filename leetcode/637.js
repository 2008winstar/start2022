/**
 * @file 二叉树的层平均值
 * @link https://leetcode-cn.com/problems/average-of-levels-in-binary-tree/
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
const averageOfLevels = function(root) {
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
  return result.map(item => (item.reduce((res, num) => res + num, 0)) / item.length);
};

const node5 = new TreeNode(5);
const node4 = new TreeNode(4);
const node2 = new TreeNode(2, undefined, node5);
const node3 = new TreeNode(3, undefined, node4);
const node1 = new TreeNode(1, node2, node3);

console.log(averageOfLevels(node1))
console.log(averageOfLevels(null))