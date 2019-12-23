// 递归的方法
var myPow = function(x, n) {
  if(n === 0) return 1;
  if(x === 1 || n === 1) return x;

  if(n < 0) {
    return 1 / myPow(x, -n);
  }

  if(Number.isInteger(n/2)) {
    const a = myPow(x, n/2); // 用这种方法。可以每次减少一半的计算
    return a * a;
  }

  if(!Number.isInteger(n/2)) {
    const a = myPow(x, (n-1)/2);
    return x * a * a;
  }
};
