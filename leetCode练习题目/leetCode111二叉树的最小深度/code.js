const Queue = require('../../数据结构/队列/src/queue');

// 递归实现
var minDepth = function(root) {

  const helper = (node, path) => {
    if(!node) return null;

    path += 1;
    if(!node.left && !node.right) return path;
    if(node.left && !node.right) return helper(node.left, path);
    if(!node.left && node.right) return helper(node.right, path);
    return Math.min(helper(node.left, path), helper(node.right, path));
  }

  return helper(root, 0);
};


// 广度优先遍历实现
var minDepth2 = function(root) {
  if(!root) return 0;

  const _Queue = new Queue();
  root.depth = 1;
  _Queue.push(root);

  let currentNode = _Queue.pop();

  while (currentNode) {
    if(!currentNode.left && !currentNode.right) {
      return currentNode.depth;
    }
    if(currentNode.left) {
      // 需要在这里改变depth。队列里面有不同层级的节点
      currentNode.left.depth = currentNode.depth + 1;
      _Queue.push(currentNode.left);
    }
    if(currentNode.right) {
      currentNode.right.depth = currentNode.depth + 1;
      _Queue.push(currentNode.right);
    }

    currentNode = _Queue.pop();
  }

  return currentNode.depth;
};
