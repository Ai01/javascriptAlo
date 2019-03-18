var setZeroes = function(matrix) {
  if (!Array.isArray(matrix) || !matrix.length) return null;

  const rows = []; // 记录行需要是0的数据
  const cols = []; // 记录列需要是0的数据

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        rows[i] = 0;
        cols[j] = 0;
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if(rows[i] === 0 || cols[j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
};

setZeroes([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]);
