var minPathSum = function(grid) {
  if(!Array.isArray(grid) || !Array.isArray(grid[0])) return 0;
  const high = grid.length;
  const len = grid[0].length;

  for (let i = 0; i < high; i++) {
    for (let j = 0; j < len; j++) {
      // 第一个位置不改变
      if (i === 0 && j === 0) continue;
      // 第一行是左面的值加上自己的值
      if (i === 0 && j > 0) {
        grid[i][j] = grid[i][j - 1] + grid[i][j];
        continue;
      }
      // 第一列是上面的值加上自己
      if (j === 0 && i > 0) {
        grid[i][j] = grid[i - 1][j] + grid[i][j];
        continue;
      }
      // 上面和左面的最小值加上自己
      grid[i][j] = Math.min(grid[i - 1][j], grid[i][j - 1]) + grid[i][j];
    }
  }

  return grid[high - 1][len - 1];
};

minPathSum([[1,3,1],[1,5,1],[4,2,1]]);
