/**
 * @file 二叉树的中序遍历
 * @link https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
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
const inorderTraversal = function(root) {
  const traversal = (node, result) => {
    if (node) {
      traversal(node.left, result);
      result.push(node.val);
      traversal(node.right, result);
    }
  };

  const result = [];
  traversal(root, result);
  return result;
};

const inorderTraversalI = (root) => {
  const result = [];
  const stack = [];
  let node = root;

  while (node !== null || stack.length) {
    if (node !== null) {
      stack.push(node);
      node = node.left;
    } else {
      node = stack.pop();
      result.push(node.val);
      node = node.right;
    }
  }

  return result;
}