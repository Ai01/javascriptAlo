# 栈

## 什么是栈

1. 栈最根本的特性是后入先出（LIFO,last-in-first-out)

## 栈应该有哪些操作

1. 栈中元素的获取，如果不在栈顶是不可以获取的。(pop)
2. 将元素压入栈顶。(push)
3. 预览栈中的元素，只是看而不删除 (peek)
4. 清除栈内的所有元素。(clean)
5. 获取栈中元素的长度也就是数量 (length)

## 代码实现

```js
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
    const _res = this.data[--this.length];
    return _res;
  }

  peek(index) {
    if (index > this.length) {
      throw new Error(`超过栈的长度${this.length}`);
    }
    return this.data[index];
  }

  clear() {
    this.data = [];
  }
}
```

## 基本测试

```js
  node ./stack.js
```

## 栈的使用

### 回文问题

> rar 就是一个回文。一段文字从左到右和从右到左是同一个单词，那就是回文。

```js
const isPalindrome = word => {
  const s = new Stack();
  for (let i = 0; i < word.length; i++) {
    s.push(word[i]);
  }
  let rWord = "";
  while (s.length > 0) {
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
  while (s.length > 0) {
    _res += s.pop();
  }
  return _res;
};
```
