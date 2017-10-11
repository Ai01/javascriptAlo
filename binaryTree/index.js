/**
 * 二叉树算法
 */

// 工具函数

function putstr(str) {
  console.log(str);
}
function print(str) {
  console.log(str);
}
function getSmallest(node) {
  if (node == null) {
    return null;
  }
  var current = node;
  while (!(current.left == null)) {
    current = current.left;
  }
  return current;
}


// 算法实现


// node
function show() {
  return this.data;
}

function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}


// bst
function insert(data) {
  var n = new Node(data, null, null);
  if (this.root === null) {
    this.root = n;
  } else {
    var current = this.root;
    var parent;
    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current == null) {
          parent.left = n;
          break;
        }
      } else {
        current = current.right;
        if (current == null) {
          parent.right = n;
          break;
        }
      }
    }
  }
}

// 查找最小值
function getMin() {
  var current = this.root;
  while (!(current.left == null)) {
    current = current.left;
  }
  return current.data;
}

// 查找最大值
function getMax() {
  var current = this.root;
  while (!(current.right == null)) {
    current = current.right;
  }
  return current.data;
}

// 查找给定值
function find(data) {
  var current = this.root;
  while (current != null) {
    if (current.data == data) {
      return current;
    } else if (data < current.data) {
      current = current.left;
    } else {
      current = current.right;
    }
  }
  return null;
}

// 删除给定节点
function removeNode(node, data) {
  if (node == null) {
    return null;
  }
  if (data == node.data) {
    if (node.left == null && node.right == null) {
      return null;
    }
    if (node.left == null) {
      return node.right;
    }
    if (node.right == null) {
      return node.left;
    }
    // 找到右子树的最小值
    var tempNode = getSmallest(node.right);
    node.data = tempNode.data;
    node.right = removeNode(node.right, tempNode.data);
    return node;
  } else if (data < node.data) {
    node.left = removeNode(node.left, data);
    return node;
  } else {
    node.right = removeNode(node.right, data);
    return node;
  }
}

function remove(data) {
  this.root = removeNode(this.root, data);
}

function BST() {
  this.root = null;
  this.insert = insert;
  this.inOrder = inOrder;
  this.getMax = getMax;
  this.getMin = getMin;
  this.find = find;
  this.remove= remove;
}



// 中序遍历
function inOrder(node) {
  if (!(node == null)) {
    inOrder(node.left);
    putstr(node.show() + " ");
    inOrder(node.right);
  }
}

// 先序遍历
function preOrder(node) {
  if (!(node == null)) {
    putstr(node.show() + " ");
    preOrder(node.left);
    preOrder(node.right);
  }
}

// 后序遍历
function postOrder(node) {
  if (!(node == null)) {
    preOrder(node.left);
    preOrder(node.right);
    putstr(node.show() + " ");
  }
}




var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);

// // 中序遍历测试
// print('inOrder traversal:');
// inOrder(nums.root);

// // 先序遍历测试
// print('preOrder traversal:');
// preOrder(nums.root);

// // 后序遍历测试
// print('postOrder traversal:');
// postOrder(nums.root);

// // 查找最小值
// var min = nums.getMin();
// print(min);

// // 查找最大值
// var max = nums.getMax();
// print(max);


// // 查找指定的值
// var sureValue = nums.find(23);
// print(sureValue);


// 遍历测试
inOrder(nums.root);

// 删除指定值
print('del');
var delData = nums.remove(23);


// 遍历测试
inOrder(nums.root);





