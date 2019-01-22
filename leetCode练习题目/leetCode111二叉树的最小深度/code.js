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
