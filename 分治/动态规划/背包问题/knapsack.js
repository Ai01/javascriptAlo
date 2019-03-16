const { consoleTree } = require('../../../../utils/consoleUtils');

// f[i][v]：表示前i件物品恰放入一个容量为v的背包可以获得的最大价值。
// 状态转移方程是：f[i][v]=max{f[i-1][v],f[i-1][v-weight[i]]+value[i]}

// 司徒正美的答案
function knapsack(weights, values, W) {
  const n = weights.length - 1;
  const f = [[]];
  for (let j = 0; j <= W; j++) {
    if (j < weights[0]) {
      //如果容量不能放下物品0的重量，那么价值为0
      f[0][j] = 0;
    } else {
      //否则等于物体0的价值
      f[0][j] = values[0];
    }
  }
  for (let j = 0; j <= W; j++) {
    for (let i = 1; i <= n; i++) {
      if (!f[i]) {
        //创建新一行
        f[i] = [];
      }
      if (j < weights[i]) {
        //等于之前的最优值
        f[i][j] = f[i - 1][j];
      } else {
        f[i][j] = Math.max(f[i - 1][j], f[i - 1][j - weights[i]] + values[i]);
      }
    }
  }
  consoleTree(f);
  return f[n][W];
}
const a = knapsack([2, 2, 6, 5, 4], [6, 3, 5, 4, 6], 10);

// 我的复制
const myKnapsack = (weights, values, W) => {
  const f = [[]];

  // 第一次处理
  for (let j = 0; j <= W; j++) {
    if (j < weights[0]) {
      f[0][j] = 0;
    } else {
      f[0][j] = values[0];
    }
  }

  for (let i = 1; i < values.length; i++) {
    for (let j = 0; j <= W; j++) {
      if(!f[i]){
        f[i] = [];
      }
      if(j < weights[i]) {
        f[i][j] = f[i-1][j];
      } else {
        f[i][j] = Math.max(f[i-1][j], f[i-1][j - weights[i]] + values[i]);
      }
    }
  }

  consoleTree(f);
  return f[weights.length-1][W];
};
const b = myKnapsack([2, 2, 6, 5, 4], [6, 3, 5, 4, 6], 10);

console.log(a, b);
