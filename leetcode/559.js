/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
const maxDepth = function(root) {
  if (!root) {
    return 0;
  }
  const children = root.children || [];
  if (children.length === 0) {
    return 1;
  }
  const childrenDepth = children.map(node => maxDepth(node));
  return 1 + Math.max(...childrenDepth);
};

// test case

function Node(val, children) {
  this.val = val;
  this.children = children;
}

const node5 = new Node(5);
const node6 = new Node(6);
const node3 = new Node(3, [node5, node6]);
const node2 = new Node(2);
const node4 = new Node(4);
const node1 = new Node(1, [node3, node2, node4]);

console.log(maxDepth(node1));