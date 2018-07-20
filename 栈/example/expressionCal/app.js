// TODO:bai
// 1. 表达式合法性的检查
// 2. 如果数字是12，1.2的处理
// 3. 错误处理

const Stack = require('../../src/stack');
const _expression = "5+2*(6-3)-4/2+8";

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
      // 当操作符栈中有值，而且操作符栈中当前top的优先级高于tmp，那么将这个操作符弹出并且输入到output中。重复这个步骤。
      while (
        operators.length() &&
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
      // 把（也从operators中弹出
      operators.pop();
    } else {
      // 如果是数字直接添加到outPut中
      outPut.push(tmp);
    }
  }

  // 如果操作符栈没空
  while (operators.length()) {
    outPut.push(operators.pop());
  }

  return outPut;
};

// 从栈中连续弹出两个值
const popTwoNumbers = (stack, valueStore) => {
  valueStore.first = stack.pop();
  valueStore.second = stack.pop();
};

// 从后缀表达式中获取结果
const getResFromPostfix = postfixStack => {
  var resultStack = new Stack();
  // 从左到右读取后缀式
  for (let i = 0; i < postfixStack.length(); ++i) {
    const tmp = postfixStack.peek(i);
    const valueStore = {
      first: null,
      second: null
    };
    console.log(resultStack);
    switch (tmp) {
      // 如果是操作符就从resultStack中弹出两个数字执行相应的运算，然后把结果压入resultStack中
      // 如果不可以连续弹出两个数字，说明后缀式不正确
      // 注意是second在前，first在后
      case "+":
        popTwoNumbers(resultStack, valueStore);
        resultStack.push(valueStore.second + valueStore.first);
        break;
      case "-":
        popTwoNumbers(resultStack, valueStore);
        resultStack.push(valueStore.second - valueStore.first);
        break;
      case "*":
        popTwoNumbers(resultStack, valueStore);
        resultStack.push(valueStore.second * valueStore.first);
        break;
      case "/":
        popTwoNumbers(resultStack, valueStore);
        resultStack.push(valueStore.second / valueStore.first);
        break;
      default:
        // 如果是数字就放入resultStack中
        resultStack.push(tmp - 0);
        break;
    }
    console.log(tmp);
  }
  const result = resultStack.top();
  resultStack.pop();
  return result;
};

const runExpression = expression => {
  // 将表达式从中缀转换为后缀
  const postFixExprssion = getPostfix(expression);
  console.log("后缀式：", postFixExprssion);
  // 从后缀表达式中计算
  return getResFromPostfix(postFixExprssion);
};

console.log(`${_expression} 运算结果：`, runExpression(_expression));
