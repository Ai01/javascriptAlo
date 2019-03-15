var invertTree = function(root) {
  const dfs = (root, cb) => {
    if (!root) return;
    dfs(root.left, cb);
    dfs(root.right, cb);
    cb(root);
  };

  dfs(root, node => {
    console.log(node);
    let tmp = node.right;
    node.right = node.left;
    node.left = tmp;
  });

  return root;
};

invertTree({
  val: 4,
  left: { val: 1 },
  right: { val: 2 },
});
