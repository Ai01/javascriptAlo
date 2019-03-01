const inorderTraversal = function(root) {
  const res = [];

  const mildOrder = (root, cb) => {
    if (!root) return;
    if (root.left) mildOrder(root.left, cb);
    cb(root);
    if (root.right) mildOrder(root.right, cb);
  };

  mildOrder(root, node => {
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
