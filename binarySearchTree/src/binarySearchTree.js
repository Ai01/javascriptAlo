// 二叉查找树算法

class Node {
  constructor(data, left, right, extraData) {
    this.data = data;
    this.left = left || null;
    this.right = right || null;
    if (extraData) {
      this.extraData = extraData;
    }
  }
}

class BinarySearchTree {
  constructor(data, extraData) {
    // TODO:bai 如何在传入一个树形结构数据的时候实现constructor
    this.root = null;
    if (data) {
      this.root = new Node(data, null, null, extraData);
    }
  }

  getRootNode() {
    return this.root;
  }

  // 插入节点
  insert(data, extraData) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      // 对node进行遍历
      while (true) {
        const currentNodeData = currentNode && currentNode.data;
        if (currentNodeData > data) {
          const leftNode = currentNode.left;
          if (!leftNode || leftNode.data === null) {
            currentNode.left = new Node(data, null, null, extraData);
            break;
          }
          currentNode = leftNode;
        }

        if (currentNodeData < data) {
          const rightNode = currentNode.right;
          if (!rightNode || rightNode.data === null) {
            currentNode.right = new Node(data, null, null, extraData);
            break;
          }
          currentNode = rightNode;
        }
      }
    }
  }

  // 中序遍历
  inOrderTraverse(node, cb) {
    if (node && node.data !== null) {
      this.inOrderTraverse(node.left, cb);
      cb(node);
      this.inOrderTraverse(node.right, cb);
    }
  }

  // 前序遍历
  preOrderTraverse(node, cb) {
    if (node && node.data !== null) {
      cb(node);
      this.preOrderTraverse(node.left, cb);
      this.preOrderTraverse(node.right, cb);
    }
  }

  // 后序遍历
  postOrderTraverse(node, cb) {
    if (node && node.data !== null) {
      this.postOrderTraverse(node.left, cb);
      this.postOrderTraverse(node.right, cb);
      cb(node);
    }
  }

  // 获取最小值
  getMin() {
    let currentNode = this.root;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  // 获取最大值
  getMax() {
    let currentNode = this.root;
    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }

  // 查找特定值
  find(data) {
    let currentNode = this.root;
    while (currentNode.data !== data) {
      if (currentNode.data > data) {
        currentNode = currentNode.left;
      }
      if (currentNode.data < data) {
        currentNode = currentNode.right;
      }
    }
    return currentNode;
  }

  // 删除节点
  remove(data) {
    this.root = this._removeNode(this.root, data);
  }

  _getSmallestNode(root) {
    let currentNode = root;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }

  _removeNode(root, data) {
    if (root === null) {
      return null;
    }
    if (data === root.data) {
      const leftNode = root.left;
      const rightNode = root.right;
      if (leftNode === null && rightNode === null) {
        // TODO:bai 测试
        return null;
      }
      if (leftNode === null && rightNode) {
        // TODO:bai 测试
        return rightNode;
      }
      if (rightNode === null && leftNode) {
        // TODO:bai 测试
        return leftNode;
      }
      if (rightNode && leftNode) {
        // TODO:bai 测试
        const tmpNode = this._getSmallestNode(rightNode);
        root.data = tmpNode.data;
        root.right = this._removeNode(rightNode, tmpNode.data);
        return root;
      }
    }
    if (data < root.data) {
      // TODO:bai 测试
      root.left = this._removeNode(root.left, data);
      return root;
    }
    if (data > root.data) {
      // TODO:bai 测试
      root.left = this._removeNode(root.right, data);
      return root;
    }
  }
}

module.exports = BinarySearchTree;
