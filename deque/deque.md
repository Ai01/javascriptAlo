# 双向队列

## 什么是双向队列

> 双向队列是建立在队列的基础上的。不同之处在于:双向队列允许从队列的两端来插入删除数据。

## 双向队列应该有哪些操作

1. 在双向队列的头部添加元素。(addFirst)
2. 删除双向队列的头部元素。removeFirst
3. 在双向队列的尾部添加元素。addLast
4. 删除双向队列的尾部元素。removeLast
5. 只读下一个会取出的头部数据。getFirst
6. 只读下一个会取出的尾部数据。getLast
7. 只读数据。peek
8. 队列长度。length
9. 清空队列。clean

```js
class Deque {
  constructor(array) {
    this.data = [];
    if (Array.isArray(array)) {
      this.data = [].concat(array);
    }
  }

  addFirst(e) {
    this.data.unshift(e);
  }

  removeFirst() {
    return this.data.shift();
  }

  getFirst() {
    return this.data[0];
  }

  addLast(e) {
    this.data.push(e);
  }

  removeLast() {
    return this.data.pop();
  }

  getLast() {
    return this.data[this.data.length - 1];
  }

  length() {
    return this.data.length;
  }

  clear() {
    this.data = [];
  }

  peek(i) {
    return this.data[i];
  }
}
```

## 实际使用
