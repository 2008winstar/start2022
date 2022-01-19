/**
 * @file 完全二叉树的节点个数
 * @link https://leetcode-cn.com/problems/count-complete-tree-nodes/
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
const countNodes = function(root) {
  if (!root) {
    return 0;
  }
  return 1 + countNodes(root.left) + countNodes(root.right);
};