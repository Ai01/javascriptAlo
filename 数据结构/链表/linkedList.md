# 链表

## 什么是链表

> 链表是一组由节点组成的集合，每一个节点都存储着它的下一个节点的引用。

## 为什么要使用链表

> 在很多语言中，数组的长度都是在声明的时候就定下的，不方便扩展。同时对数组的删除也很麻烦，因为需要将后面的元素平移。
> js 中不存在这个问题，但是 js 的数组效率很低。而链表的插入和删除都很方便

## 链表应该有哪些操作

> 在实现链表的时候需要考虑到链表是由 Node 组成的。而且每个 Node 都应该有下一个 Node 的引用

1. 插入操作。insert
2. 删除操作。remove
3. 查找操作。find

## 代码实现

```js
class Node {
  constructor(element, next) {
    this.element = element;
    this.next = next || null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node('head');
  }

  find(item) {
    let currentNode = this.head;
    while (currentNode.next && currentNode.element !== item) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  insert(newElement, item) {
    const newNode = new Node(newElement);
    const current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
  }

  _findPrevNode(item) {
    let currentNode = this.head;
    while (currentNode !== null && currentNode.next.element !== item) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  remove(item) {
    const prevNode = this._findPrevNode(item);
    if (prevNode.next !== null) {
      prevNode.next = prevNode.next.next;
    }
  }
}
```
