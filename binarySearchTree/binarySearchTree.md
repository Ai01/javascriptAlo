# 二叉树

## 什么是二叉树

> 二叉树是一种子节点不超过两个的树

## 什么是二叉查找树

> 二叉查找树是二叉树的变种。要求左节点必须小于右节点。查找效率很高。

## 二叉树应该有哪些操作

1. 插入节点，(对于二叉树来说可能需要有额外的数据，为了解决这个问题，二叉树的节点上的数据应该有额外的数据，所以最好是一个 object)。(insert)
2. 遍历节点，前序遍历，后序遍历，中序遍历。
3. 获取最大最小值。getMax, getMin
4. 查找节点。find
5. 删除节点。remove
6. 获取根节点。getRootNode

## 代码实现细节

```js
class Node {
  constructor(data, left, right, extraData) {
    // 对二叉树的节点来说，可能需要有额外的数据。所以加上extraData这个函数
    // TODO: bai 如果将一个层级结构的数据在构造的时候变成tree。
    this.data = data;
    this.left = left || null;
    this.right = right || null;
  }
}

class BinarySearchTree {
  insert(data) {
    while (true) {
      // 在插入数据的时候需要从root节点来实现对整个树的遍历。来找到父级实现插入数据。
      // 找到父级的方法是在迭代中比较当前节点和data的大小，
      // 小于data，则将当前节点改为右节点
      // 大于data，则将当前节点改为左节点
    }
  }
  
  // 前序，中序和后序的不同之处在于父节点出现的顺序。用递归实现
  // 为了使遍历是有价值的，需要接受node和回调函数cb作为参数。不同之处就在于cb执行的位置
  inOrderTraverse(){}
  preOrderTraverse(){}
  postOrderTraverse(){}
  
  
  
}
```
