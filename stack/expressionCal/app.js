// 算术表达式计算
// 1. 检查算术表达式的合法性
// 2. 将表达式从中缀式转换为右缀式
// 3. 计算右缀式

const _expression = "5+2*(6-3)-4/2";

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
    return this.data[this.length - 1];
  }

  clear() {
    this.data = [];
  }
}

// 判断是否是运算符
const isOperator = c => {
  switch (c) {
    case "+":
    case "-":
    case "*":
    case "/":
      return true;
    default:
      return false;
  }
};

// 获取运算符的优先级
const prior = c => {
  switch (c) {
    case "+":
    case "-":
      return 1;
    case "*":
    case "/":
      return 2;
    default:
      return 0;
  }
};

// 中缀转后缀
const getPostfix = expr => {
  // 存储结果
  const outPut = new Stack();
  // 存储运算符
  const operators = new Stack();

  for (let i = 0; i < expr.length; i++) {
    const tmp = expr[i];
    // 如果是运算符
    if (isOperator(tmp)) {
      while (
        operators.length &&
        isOperator(operators.top()) &&
        prior(operators.top()) >= prior(tmp)
      ) {
        outPut.push(operators.pop());
      }
      operators.push(tmp);
    } else if (tmp === "(") {
      // 如果是左括号,就推入操作符栈
      operators.push(tmp);
    } else if (tmp === ")") {
      // 如果是右括号,就把操作符栈中的逐一加入到output中，直到找到（
      while (operators.top() !== "(") {
        outPut.push(operators.pop());
      }
      operators.pop();
    } else {
      outPut.push(tmp);
    }
  }

  // 如果操作符栈没空
  while (operators.length) {
    outPut.push(operators.pop());
  }

  return outPut;
};

// 从栈中连续弹出两个值
const popTwoNumbers = s => {
  const first = s.pop();
  const second = s.pop();
  return [first, second];
};

// 从后缀表达式中获取结果
const getResFromPosfix = s => {
  var res = new Stack();
  for (let i = 0; i < s.length; ++i) {
    const tmp = s.peek(i);
    switch (tmp) {
      case "+":
        let v1 = popTwoNumbers(res);
        res.push(v1[1] + v1[0]);
        break;
      case "-":
        let v2 = popTwoNumbers(res);
        res.push(v2[1] - v2[0]);
        break;
      case "*":
        let v3 = popTwoNumbers(res);
        res.push(v3[1] * v3[0]);
        break;
      case "/":
        let v4 = popTwoNumbers(res);
        res.push(v4[1] / v4[0]);
        break;
      default:
        res.push(tmp - 0);
        break;
    }
  }
  const result = res.top();
  res.pop();
  return result;
};

const runExpression = o => {
  // TODO:表达式语法检查
  // const validateExpression = o => {
  // };

  // 将表达式从中缀转换为后缀
  const postFixExprssion = getPostfix(o);
  // 从后缀表达式中计算
  return getResFromPosfix(postFixExprssion);
};

console.log(runExpression(_expression));
