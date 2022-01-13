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
 * @return {number[][]}
 */
const levelOrder = function(root) {
  const result = [];
  let currentLevel = [];
  let nextLevel = [];
  let level = [];
  if (root) {
    currentLevel.push(root);
    while (currentLevel.length || nextLevel.length) {
      if (currentLevel.length === 0) {
        currentLevel = nextLevel;
        nextLevel = [];
        level = [];
      }
      while (currentLevel.length) {
        const node = currentLevel.shift()
        level.push(node.val);
        if (node.left) {
          nextLevel.push(node.left);
        }
        if (node.right) {
          nextLevel.push(node.right);
        }
      }
      result.push(level);
    }
  }
  return result;
};

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const node15 = new TreeNode(15);
const node7 = new TreeNode(7);
const node20 = new TreeNode(20, node15, node7);
const node9 = new TreeNode(9);
const node3 = new TreeNode(3, node9, node20);
const node1 = new TreeNode(1);

console.log(levelOrder(node3));
console.log(levelOrder(node1));
console.log(levelOrder(null))