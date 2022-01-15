/**
 * @file 填充每个节点的下一个右侧节点指针
 * @link https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node/
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
    root.next = null;

    if (root.left && root.right) {
      root.left.next = root.right;
      root.right.next = null;
      connectTwoNodes(root.left, root.right);
    }
  }
  return root;
};

const connectTwoNodes = (left, right) => {
  if (left.left) {
    left.left.next = left.right;
    if (left.next) {
      left.right.next = left.next.left;
    } else {
      left.right.next = null;
    }

    right.left.next = right.right;
    if (right.next) {
      right.right.next = right.next.left;
    } else {
      right.right.next = null;
    }
    connectTwoNodes(left.left, left.right);
    connectTwoNodes(right.left, right.right);
  }
}

function Node(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
}

const node4 = new Node(4);
const node5 = new Node(5);
const node2 = new Node(2, node4, node5);
const node6 = new Node(6);
const node7 = new Node(7);
const node3 = new Node(3, node6, node7);
const node1 = new Node(1, node2, node3);

connect(node1);
console.log(JSON.stringify(node1))

