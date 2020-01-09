var numIslands = function(grid) {
  if(!Array.isArray(grid) || !Array.isArray(grid[0])) return 0;
  let amount = 0;

  const dfs = (grid, i, j) => {
    if(!grid[i]) return;
    if(!grid[i][j]) return;
    if(grid[i][j] === '0') return;
    grid[i][j] = '0';
    dfs(grid, i-1, j);
    dfs(grid, i+1, j);
    dfs(grid, i, j-1);
    dfs(grid, i, j+1);
  }

  for(let i = 0; i< grid.length;i++) {
    for(let j = 0;j < grid[i].length; j++) {
      if(grid[i][j] === '1') {
        amount += 1;
        dfs(grid, i , j);
      }
    }
  }

  return amount;
};
