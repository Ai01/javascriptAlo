// 进制转换
const Stack = require('../src/stack');

const conversions = (num, b) => {
  var s = new Stack();
  while (num > 0) {
    s.push(num % b);
    num = Math.floor(num / b);
  }
  let _res = "";
  while (s.length() > 0) {
    _res += s.pop();
  }
  return _res;
};

console.log('11转为2进制:',conversions(11, 2));
