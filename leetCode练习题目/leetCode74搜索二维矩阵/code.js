const searchMatrix = function(matrix, target) {
  if(!Array.isArray(matrix) || !matrix.length) return false;

  let low = 0;
  let high = matrix.length * matrix[0].length - 1;
  let mid = Math.floor(low + (high - low)/2);

  const n = matrix[0].length;
  while(low <= high) {

    // x,y坐标的转换。只需要将二维数组拼接过程想象一下。就知道为什么
    const x = Math.floor(mid / n);
    const y = mid % n;

    if(matrix[x][y] === target) return true;
    if(matrix[x][y] > target) high = mid - 1;
    if(matrix[x][y] < target) low = mid + 1;

    mid = Math.floor(low + (high - low) / 2);
  }

  return false;
};

searchMatrix([[1, 1]], 2);
