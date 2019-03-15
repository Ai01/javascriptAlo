var isValidBST = function(root) {

  const _isValidBSTBound = (root, lower, upper) => {
    if(!root) return true;
    if(lower && lower.val > root.val) return false;
    if(upper && upper.val < lower.val) return false;

    return _isValidBSTBound(root.left, lower, root) && _isValidBSTBound(root.right, root, upper);
  };

  return _isValidBSTBound(root, null, null);
};
