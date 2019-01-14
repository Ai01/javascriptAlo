// 递归的方法
var isSameTree = function(p, q) {
  if(!p && !q) return true;
  if(!p || !q) return false;

  if(p.val === q.val) {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }

  return false;
};
