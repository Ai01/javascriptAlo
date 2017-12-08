// 进制转换
class Stack {
  constructor(array) {
    this.data = [];
    if (array) {
      this.data = [].concat(array);
    }
    this.length = this.data.length;
  }

  push(e) {
    this.data[this.length++] = e;
  }

  pop() {
    if (this.length >= 1) {
      const _res = this.data[--this.length];
      this.data.length = this.length;
      return _res;
    }
    throw new Error("stack已经空了");
  }

  peek(index) {
    if (index > this.length) {
      throw new Error(`超过栈的长度${this.length}`);
    }
    return this.data[index];
  }

  top() {
    // -1不可以忘记
    return this.data[this.length - 1];
  }

  clear() {
    this.data = [];
  }
}

const conversions = (num, b) => {
  var s = new Stack();
  while (num > 0) {
    s.push(num % b);
    num = Math.floor(num / b);
  }
  let _res = "";
  while (s.length > 0) {
    _res += s.pop();
  }
  return _res;
};

console.log(conversions(11, 2));
