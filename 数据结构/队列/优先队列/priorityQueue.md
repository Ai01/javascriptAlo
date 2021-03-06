# 优先队列

## 什么是优先队列

> 优先队列是建立在队列的基础上的。不同与普通队列的地方在于：优先队列中的元素具有优先级如果优先级高就先出队列，在同一级的元素才遵守 FIFO。

## 优先队列应该有哪些操作

1. 长度。(length)
2. 只读数据，要同时具有优先级的内容。(peek)
3. 插入数据。(push)
4. 取出数据。(pop)
5. 只读下一个会取出的数据，需要根据优先级来判断。(front)
6. 清空队列。(clean)

## 代码展示

```js
class PriorityQueue {
  constructor(array) {
    this.data = [];
    if (Array.isArray(array)) {
      this.data = [].concat(array);
    }
  }

  push(e) {
    this.data.push(e);
  }

  pop() {
    let e = null;
    let index = null;
    for (let i = 0; i < this.data.length; i += 1) {
      const tmp = this.data[i];
      if (!e) {
        e = tmp;
        index = i;
      }
      if (e && tmp.level > e.level) {
        e = tmp;
        index = i;
      }
    }
    return this.data.splice(index, 1);
  }

  length() {
    return this.data.length;
  }

  front() {
    let e = null;
    let index = null;
    for (let i = 0; i < this.data.length; i += 1) {
      const tmp = this.data[i];
      if (!e) {
        e = tmp;
        index = i;
      }
      if (e && tmp.level > e.level) {
        e = tmp;
        index = i;
      }
    }
    return this.data[index];
  }

  peek(i) {
    return this.data[i];
  }

  clear() {
    this.data = [];
  }
}
```


