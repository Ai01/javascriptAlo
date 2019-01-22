/**
 树数据结构的公共操作
 插入(指定位置的插入)
 查找(插入和查找都需要找到指定的节点。这个功能要抽出来)
 删除
 创建树节点
 遍历

 每个节点的构成需要可扩展。
 {
   pid:
   id:
   level:
   children：
   data:
   render: // 渲染的内容。是一个函数，返回渲染的节点内容
 }

 每个节点的编号组成：
 层级 - id(本级中的index,删除发生时不会改变,原始的index)
 */


function Node(data) {
  this.data = data;
  this.parent = null;
  this.children = [];
}

function Tree(data) {
  var node = new Node(data);
  this._root = node;
}

function FindIndex(arr, data) {
  var index;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].data === data) {
      index = i;
    }
  }
  return index;
}

function Queue() {
	var items = [];
	// 入队
	this.enqueue = function(element){
		items.push(element);
	}
	// 出队
	this.dequeue = function(element){
		return items.shift();
	};
}

//dfs深度优先遍历
Tree.prototype.traverseDF = function(callback) {
  (function recurse(currentNode) {
    for (var i = 0, length = currentNode.children.length; i < length; i++) {
      recurse(currentNode.children[i]);
    }
    callback(currentNode);
  })(this._root);
};

// bfs广度优先遍历
Tree.prototype.traverseBF = function(callback) {
    var queue = new Queue();
    queue.enqueue(this._root);
    var currentTree = queue.dequeue;

    while (currentTree) {
        for (var i = 0, length = currentTree.children.length; i < length; i++) {
            queue.enqueue(currentTree.children[i]);
        }
        callback(currentTree);
        currentTree = queue.dequeue();
    }
}

// 搜索方法
Tree.prototype.contains = function(callback, traversal) {
  traversal.call(this, callback);
}

// 添加节点方法
Tree.prototype.add = function(data, toData, traversal) {
  var child = new Node(data);
  var parent = null;
  var callback = function(node) {
    if (node.data === toData) {
      parent = node;
    }
  };
  this.contains(callback, traversal);

  if (parent) {
    parent.children.push(child);
    child.parent = parent;
  } else {
    throw new Error('cannot add note to a non-existent parent');
  }
}

// 删除方法
Tree.prototype.remove = function(data, fromData, traversal) {
  // var tree = this;
  var parent = null;
  var childToRemove = null;
  var index;
  var callback = function(node) {
    if (node.data === fromData) {
      parent = node;
    }
  };


  this.contains(callback, traversal);
  if (parent) {
    index = FindIndex(parent.children, data);

    if (index === undefined) {
      throw new Error('Node to remove does not exist');
    } else {
      childToRemove = parent.children.splice(index, 1);
    }
  } else {
    throw new Error('parent does not exit');
  }

  return childToRemove;
}


// 测试
var tree = new Tree('ceo');
tree.add('vp of hapiness', 'ceo', tree.traverseDF);
tree.add('vp of finance', 'ceo', tree.traverseDF);
tree.add('vp of sadness', 'ceo', tree.traverseDF);
tree.add('Director of Puppies', 'vp of finance', tree.traverseDF);
tree.add('Manager of Puppies', 'Director of Puppies', tree.traverseDF);
tree.remove('vp of finance','ceo',tree.traverseDF);
console.log(tree._root);
