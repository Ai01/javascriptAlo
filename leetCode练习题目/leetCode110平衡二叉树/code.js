const isBalanced = function(root) {
  if (!root) return true;

  const getHeight = root => {
    if (!root) return 0;

    const left = getHeight(root.left);
    const right = getHeight(root.right);

    return Math.max(left, right) + 1;
  };

  return Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1 && isBalanced(root.right) && isBalanced(root.left);
};


const isBalanced2 = function(root) {
  // 获取高度同时测试是否是平衡二叉树
  // 如果返回-1。那么就不是平衡二叉树
  // 如果返回>0。那么就是高度
  const getHeightAndCheck = (node) => {
    if(!node) return 0;

    const left = getHeightAndCheck(node.left);
    // 如果左子树不是平衡二叉树。那么就退出
    if(left === -1) return -1;

    const right = getHeightAndCheck(node.right);
    // 如果右子树不是平衡二叉树，那么就退出
    if(right === -1) return -1;

    // 如果左右的高度差大于1就返回-1
    if(Math.abs(left - right) > 1) return -1;

    // 返回高度
    return Math.max(left, right) + 1;
  }

  return !(getHeightAndCheck(root) === -1);
};
