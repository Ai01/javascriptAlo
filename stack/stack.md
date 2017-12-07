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
    this.data = [].concat(array);
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
    if(index>this.length){
      throw new Error(`超过栈的长度${this.length}`);
    }
    return this.data[index];
  }

  clear() {
    this.data = [];
  }
}
```

## 测试

```js
  node ./stack.js
``` 