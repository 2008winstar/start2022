/**
 * @file N叉树的前序遍历
 * @link https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/
 */
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
const preorder = function(root) {
  const result = [];

  if (root) {
    const queue = [root];

  }

  return result;
};

function Node(val, children) {
  this.val= val;
  this.children = children;
}

const node5 = new Node(5);
const node6 = new Node(6);
const node3 = new Node(3, [node5, node6]);
const node2 = new Node(2);
const node4 = new Node(4);
const node1 = new Node(1, [node3, node2, node4]);

preorder(node1)