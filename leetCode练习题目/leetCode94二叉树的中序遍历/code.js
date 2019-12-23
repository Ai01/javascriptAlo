const inorderTraversal = function(root) {
  const res = [];

  const middleOrder = (root, cb) => {
    if (!root) {
      return null;
    }
    if (root.left) {
      middleOrder(root.left, cb);
    }
    cb(root);
    if (root.right) {
      middleOrder(root.right, cb);
    }
  };

  middleOrder(root, node => {
    res.push(node.val);
  });

  return res;
};

const inorderTraversal2 = function(root) {
  const res = [];
  const stack = [];

  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop();
    res.push(root.val);
    root = root.right;
  }

  return res;
};

inorderTraversal2({ val: 1, right: { val: 2, right: { val: 3 } } });
