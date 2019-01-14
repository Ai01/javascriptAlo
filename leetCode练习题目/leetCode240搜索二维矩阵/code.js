const searchMatrix = function(matrix, target) {
  if(!matrix || !matrix.length) return false;

  const m = matrix[0].length - 1;
  const n = matrix.length - 1;

  let top = 0;
  let right = m;

  while(top <= n && right >= 0) {
    if(matrix[top][right] === target) {
      return true;
    } else if(target < matrix[top][right]) {
      right -= 1;
    } else if (target > matrix[top][right]) {
      top += 1;
    }
  }

  return false;
};
