const DoubleLinkedList = require('../../链表/双向链表/doubleList');

// 保存了插入和获取的顺序。为了实现LRU
class LinkedHashMap {
  constructor(capacity){
    this.capacity = capacity || 0;
    this.hashTable = {};
    // 双向链表用来保持使用顺序
    this.doubleLinkedList = new DoubleLinkedList();
  }

  add(key, value){
    if(!this.hashTable[key]) {
      if(this.capacity > 0) {
        this.capacity -= 1;
      } else {
        this.deleteTail();
      }
      // 将刚插入的节点放到头部
      this.doubleLinkedList.insertHead(key);
    } else {
      this.doubleLinkedList.changeHead(key);
    }

    // 插入hashTable
    this.hashTable[key] = value;
  }

  delete(key) {
    const value = this.hashTable[key];
    delete this.hashTable[key];

    // 将链表中的数据删除
    this.doubleLinkedList.remove(key);
  }

  deleteTail() {
    const tail = this.doubleLinkedList.getTail();

    this.delete(tail ? tail.value : null);
  }

  get(key) {
    const value = this.hashTable[key];

    if(value) {
      this.doubleLinkedList.changeHead(key);
    }
    return value || -1;
  }

}
