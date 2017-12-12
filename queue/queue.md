# 队列

## 什么是队列

> 队列最重要的特性是先入先出,(FIFO, first-in-first-out)

## 队列需要有哪些操作

1. 在队列的尾部添加一个元素。(enterQueue)
2. 从队列的头部弹出一个元素。(outQueue)
3. 查询队列的长度。（length）
4. 返回队列顶部的元素，并且不对队列作出修改。(front)
5. 预览栈中的元素。只读 (peek)
6. 清空队列。(clear)

## 队列的代码实现

```js
class Queue {
  constructor(array) {
    this.data = [];
    if (array) {
      this.data = [].concat(array);
    }
  }

  peek(index) {
    if (index > this.data.length) {
      throw new Error(`${index}大于队列的长度${this.data.length}`);
    }
    return this.data[index];
  }

  length() {
    return this.data.length;
  }

  front() {
    if (!this.data.length) {
      throw new Error('对列为空');
    }
    return this.data[0];
  }

  enterQueue(element) {
    this.data.push(element);
  }

  outQueue() {
    return this.data.shift();
  }

  clear() {
    this.data = [];
  }
}
```

## 队列的使用


### 用两个队列模仿一个栈






