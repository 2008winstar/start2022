const levelOrder = (node) => {
  const result = [];
  const queue = [];
  queue.push(node);
  while (queue.length) {
    const item = queue.shift();
    if (item.left) {
      queue.push(item.left);
    }
    if (item.right) {
      queue.push(item.right);
    }
    if (item) {
      result.push(item.val);
    }
  }
  return result;
}

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

console.log(levelOrder(node3));