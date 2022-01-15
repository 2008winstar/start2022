/**
 * @file 填充每个节点的下一个右侧节点指针 II
 * @link https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node-ii/
 */
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
const connect = function(root) {
  if (root) {
    const arr = [root];
    while (arr.length) {
      const len = arr.length;
      let prevNode = null;
      for (let i = 0; i < len; i++) {
        const node = arr.shift();
        if (prevNode) {
          prevNode.next = node;
          prevNode = node;
        } else {
          prevNode = node;
        }
        if (node.left) {
          arr.push(node.left);
        }
        if (node.right) {
          arr.push(node.right);
        }
      }
    }
  }
  return root;
};