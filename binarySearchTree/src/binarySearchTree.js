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

  getData() {
    return this.data;
  }

  getExtraData() {
    return this.extraData;
  }

  getLeftNode() {
    return this.left;
  }

  getRightNode() {
    return this.right;
  }

  changeLeftNode(e) {
    this.left = e;
  }

  changeRightNode(e) {
    this.right = e;
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
        const currentNodeData = currentNode && currentNode.getData();
        if (currentNodeData > data) {
          const leftNode = currentNode.getLeftNode();
          if (!leftNode || leftNode.getData() === null) {
            currentNode.changeLeftNode(new Node(data, null, null, extraData));
            break;
          }
          currentNode = leftNode;
        }

        if (currentNodeData < data) {
          const rightNode = currentNode.getRightNode();
          if (!rightNode || rightNode.getData() === null) {
            currentNode.changeRightNode(new Node(data, null, null, extraData));
            break;
          }
          currentNode = rightNode;
        }
      }
    }
  }

  // 中序遍历
  inOrderTraverse(node, cb) {
    if (node && node.getData() !== null) {
      this.inOrderTraverse(node.getLeftNode(), cb);
      cb(node);
      this.inOrderTraverse(node.getRightNode(), cb);
    }
  }

  // 前序遍历
  preOrderTraverse(node, cb) {
    if (node && node.getData() !== null) {
      cb(node);
      this.preOrderTraverse(node.getLeftNode(), cb);
      this.preOrderTraverse(node.getRightNode(), cb);
    }
  }

  // 后序遍历
  postOrderTraverse(node, cb) {
    if (node && node.getData() !== null) {
      this.postOrderTraverse(node.getLeftNode(), cb);
      this.postOrderTraverse(node.getRightNode(), cb);
      cb(node);
    }
  }

  // 获取最小值
  getMin() {
    let currentNode = this.root;
    while (currentNode.getLeftNode() !== null) {
      currentNode = currentNode.getLeftNode();
    }
    return currentNode.getData();
  }

  // 获取最大值
  getMax() {
    let currentNode = this.root;
    while (currentNode.getRightNode() !== null) {
      currentNode = currentNode.getRightNode();
    }
    return currentNode.getData();
  }

  // 查找特定值
  find(data) {
    let currentNode = this.root;
    while (currentNode.getData() !== data) {
      if (currentNode.getData() > data) {
        currentNode = currentNode.getLeftNode();
      }
      if (currentNode.getData() < data) {
        currentNode = currentNode.getRightNode();
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
    while (currentNode.getLeftNode() !== null) {
      currentNode = currentNode.getLeftNode();
    }
    return currentNode;
  }

  _removeNode(root, data) {
    if (root === null) {
      return null;
    }
    if (data === root.getData()) {
      const leftNode = root.getLeftNode();
      const rightNode = root.getRightNode();
      if (leftNode === null && rightNode === null) {
        return null;
      }
      if (leftNode === null && rightNode) {
        return rightNode;
      }
      if (rightNode === null && leftNode) {
        return leftNode;
      }
      if (rightNode && leftNode) {
        const tmpNode = this._getSmallestNode(rightNode);
        root.data = tmpNode.getData();
        root.changeRightNode(this._removeNode(rightNode, tmpNode.data));
        return root;
      }
    }
    if (data < root.getData()) {
      root.changeLeftNode(this._removeNode(root.getLeftNode(), data));
      return root;
    }
    if (data > root.getData()) {
      root.changeRightNode(this._removeNode(root.getRightNode(), data));
      return root;
    }
  }


}

module.exports = BinarySearchTree;
