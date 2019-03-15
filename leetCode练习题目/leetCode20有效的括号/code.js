
class Stack {
  constructor(a) {
    this.data = [];
    if (Array.isArray(a)) {
      // 不再这里维护length，避免代码写的复杂
      this.data = [].concat(a);
    }
  }

  // 入栈
  push(e) {
    this.data.push(e);
  }

  // 出栈
  pop() {
    return this.data.pop();
  }

  // 查看栈中的对应index的内容
  peek(index) {
    return this.data[index];
  }

  // 查看栈的长度
  length() {
    return this.data.length;
  }

  // 查看栈顶的内容
  top() {
    return this.data[this.data.length - 1];
  }

  // 栈底的内容
  bottom() {
    return this.data[0];
  }

  // 清空栈
  clear() {
    this.data = [];
  }
}


var isValid = function(s) {
  if(!s) return true;

  const _stack = new Stack();
  for(let i = 0; i<s.length; i++) {
    if(!_stack.length()) {
      _stack.push(s[i]);
      continue;
    }
    if(_stack.top() === '('&& s[i] === ')') {
      _stack.pop();
      continue;
    }
    if(_stack.top() === '['&& s[i] === ']') {
      _stack.pop();
      continue;
    }
    if(_stack.top() === '{'&& s[i] === '}') {
      _stack.pop();
      continue;
    }
    _stack.push(s[i]);
  }

  return _stack.length() === 0;
};
