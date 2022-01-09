/**
 * @file 二叉树的前序遍历
 * @link https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
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
const preorderTraversal = function(root) {
  const traversal = (node, result) => {
    if (node) {
      result.push(node.val);
      traversal(node.left, result);
      traversal(node.right, result);
    }
  };

  const result = [];
  traversal(root, result);

  return result;
};

function TreeNode(val, left, right) {
   this.val = (val===undefined ? 0 : val)
   this.left = (left===undefined ? null : left)
   this.right = (right===undefined ? null : right)
}

const node3 = new TreeNode(3);
const node2 = new TreeNode(2, node3);
const node1 = new TreeNode(1, null, node2);

console.log(preorderTraversal(node1));