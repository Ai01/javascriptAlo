// 动态规化
// 斐波那契数列
// 0, 1, 1, 2, 3, 5, 8


// 递归解决
function recurFib(n) {
  if (n < 2) {
    return n;
  } else {
    return recurFib(n - 2) + recurFib(n - 1);
  }
}

// 尾递归优化
function recurFibTail(n, acc1, acc2) {
  if (n < 2) {
    return acc1;
  } else {
    return recurFibTail(n - 1, acc2, acc1 + acc2);
  }
}

// 动态规化解决
function dynFib(n) {
  var val = [];
  for (var i = 0; i < n; i++) {
    val[i] = 0;
  }
  if (n == 1 || n == 2) {
    return 1;
  } else if (n !== 0) {
    val[1] = 1;
    val[2] = 2;
    for (var i = 3; i <= n; i++) {
      val[i] = val[i - 1] + val[i - 2];
    }
    return val[n - 1];
  } else {
    return 0;
  }
}

// 迭代方法
function iterFib(n) {
  var last = 1;
  var nextLast = 1;
  var result = 1;
  for (var i = 2; i < n; i++) {
    result = last + nextLast;
    nextLast = last;
    last = result;
  }
  return result;
}



// test

const num = 40;

var start = new Date().getTime();
const res = dynFib(num);
var stop = new Date().getTime();
console.log(res, `动态规划时间: ${stop - start}ms`);

start = new Date().getTime();
const res2 = iterFib(num);
stop = new Date().getTime();
console.log(res2, `迭代方式时间: ${stop - start}ms`);

start = new Date().getTime();
const res3 = recurFibTail(num,1,1);
stop = new Date().getTime();
console.log(res3, `尾递归时间: ${stop - start}ms`);

start = new Date().getTime();
const res1 = recurFib(num);
stop = new Date().getTime();
console.log(res1, `递归时间: ${stop - start}ms`);
