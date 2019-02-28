// 递归
var climbStairs = function(n) {
  if(n <= 0) return 0;
  if(n === 1) return 1;
  if(n === 2) return 2;

  return climbStairs(n-1) + climbStairs(n-2);
};

// 动态规划
var climbStairs2 = function(n) {
  let res = [0, 1, 2];

  for(let i = 3; i <= n; i++) {
    res[i] = res[i-1] + res[i-2];
  }

  return res[n];
};


// console.log(climbStairs(45));
console.log(climbStairs2(45));
