// 迭代实现
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

// 递归实现
const myInvertTree = (root) => {
  if(!root) return null;
  if(root && !root.left && !root.right) return root;

  root._left = myInvertTree(root.right);
  root._right = myInvertTree(root.left);
  root.left = root._left;
  root.right = root._right;

  delete root._right;
  delete root._left;

  return root;
}

console.log(myInvertTree({
  val: 4,
  left: { val: 1 },
  right: { val: 2 },
}));
