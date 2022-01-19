/**
 * @file 对称二叉树
 * @link https://leetcode-cn.com/problems/symmetric-tree/
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
 * @return {boolean}
 */
const isSymmetric = function(root) {
  if (root) {
    return isSymmetricTree(root.left, root.right);
  }
  return false;
};

const isSymmetricTree = (left, right) => {
  if (left && right) {
    if (left.val === right.val) {
      return isSymmetricTree(left.left, right.right) && isSymmetricTree(left.right, right.left);
    }
    return false;
  }
  return left === null && right === null;
};