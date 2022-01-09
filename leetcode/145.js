/**
 * @file 二叉树的后续遍历
 * @link https://leetcode-cn.com/problems/binary-tree-postorder-traversal/
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
 * @return {number[]}
 */
const postorderTraversal = function(root) {
  const traversal = (node, result) => {
    if (node) {
      traversal(node.left, result);
      traversal(node.right, result);
      result.push(node.val);
    }
  };

  const result = [];
  traversal(root, result);
  return result;
};