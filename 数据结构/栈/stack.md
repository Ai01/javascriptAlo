# 栈

## 什么是栈

1. 栈最根本的特性是后入先出（LIFO,last-in-first-out)

## 栈应该有哪些操作

1. 栈中元素的获取，如果不在栈顶是不可以获取的。(pop)
2. 将元素压入栈顶。(push)
3. 预览栈中的元素。只读 (peek)
4. 预览栈顶的元素，为了减少使用 peek 的麻烦，读栈顶的操作比较频繁。只读 (top)
5. 清除栈内的所有元素。(clean)
6. 获取栈中元素的长度也就是数量 (length)

## 代码实现

```js
class Stack {
  constructor(array) {
    this.data = [];
    if (array) {
      // 不再这里维护length，避免代码写的复杂
      this.data = [].concat(array);
    }
  }

  push(e) {
    this.data.push(e);
  }

  pop() {
    const _res = this.data.pop();
    return _res;
  }

  peek(index) {
    return this.data[index];
  }

  length(){
    return this.data.length;
  }

  top() {
    return this.data[this.data.length - 1];
  }

  clear() {
    this.data = [];
  }
}
```

## 栈的使用

### 表达式的合法性判断和计算（经典问题）

> 问题：给定一个字符串，只包含 +, -, \*, / , 数字 , 小数点 , ( , )。要求：
1. 判断该算术表达式是否合法； 
2. 如果合法，计算该表达式的值。

> 代码在下面有链接，一些限制写在了代码开始

### 回文问题

> rar 就是一个回文。一段文字从左到右和从右到左是同一个单词，那就是回文。

```js
const isPalindrome = word => {
  const s = new Stack();
  for (let i = 0; i < word.length; i++) {
    s.push(word[i]);
  }
  let rWord = "";
  while (s.length() > 0) {
    rWord = `${rWord}${s.pop()}`;
  }
  if (rWord === word) {
    return true;
  }
  return false;
};
```

### 进制转换

> 将数字转换为目标进制的数字

```js
// b只能是2~9
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
```

## 可运行代码

[栈](./src/stack.js)

[栈的测试](./src/test.js)

[回文](./example/palindrome.js)

[进制转换](./example/conversions.js)

[运算式计算](./example/expressionCal/app.js)


