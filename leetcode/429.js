/**
 * @file N叉树的层序遍历
 * @link https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/
 */
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
const levelOrder = function(root) {
  const result = [];

  if (root) {
    const arr = [root];
    while (arr.length) {
      const len = arr.length;
      const level = [];

      for (let i = 0; i < len; i++) {
        const node = arr.shift();
        level.push(node.val);
        if (node.children) {
          node.children.forEach((item) => {
            arr.push(item);
          });
        }
      }

      result.push(level);
    }
  }

  return result;
};