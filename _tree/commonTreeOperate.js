/**
树数据结构的公共操作
插入(指定位置的插入)
查找(插入和查找都需要找到指定的节点。这个功能要抽出来)
删除
创建树节点
遍历（不一定需要）

每个节点的构成需要可扩展。在gc中至少需要
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

// FindIndex函数

const FindIndex = (arr, id) => {
  let index;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].id === id) {
      index = i;
    }
  }
  return index;
};


// 节点类
// 创建树的节点
// 树节点的数据都在data中，id是身份的唯一标识
class Node {
  constructor(data, id) {
    const that = this;
    Object.keys(data).forEach((item) => {
      that[item] = data[item];
    });
    that.id = id;
    that.parent = null;
    that.children = [];
    return that;
  }
}


// 树类
class Tree {
  constructor(data, id) {
    // 创建根
    const node = new Node(data, id);
    this._root = node;
  }

    // 深度优先遍历
  traverseDF(callback) {
    const recurse = (currentNode) => {
            // 对当前节点的子节点全部递归执行recurse
      for (let i = 0, length = currentNode.children.length; i < length; i += 1) {
        recurse(currentNode.children[i]);
      }
      callback(currentNode);
    };
    recurse(this._root);
  }

    // 搜索方法
  search(callback, traversal) {
    traversal.call(this, callback);
  }

    // 插入节点方法
    // data是需要插入的数据，toData是插入的位置数据，traversal是遍历方法
  add(data, id, toId, traversal) {
    const child = new Node(data, id);
    let parent = null;
    const callback = (node) => {
      if (node.id === toId) {
        parent = node;
      }
    };

    this.search(callback, traversal);

    if (parent) {
      parent.children.push(child);
      child.parent = parent;
    } else {
      throw new Error('不可以将节点插入一个不存在的父节点');
    }
  }

    // 删除节点方法
    // data是需要删除的节点，fromData是需要删除节点的父级,traversal是遍历方法
  remove(id, fromId, traversal) {
    let parent = null;
    let childToRemove = null;
    let index;
    const callback = (node) => {
      if (node.id === fromId) {
        parent = node;
      }
    };

    this.search(callback, traversal);

    if (parent) {
      index = FindIndex(parent.children, id);
      if (index === undefined) {
        throw new Error('需要删除的节点不存在');
      } else {
        childToRemove = parent.children.splice(index, 1);
      }
    } else {
      throw new Error('父级不存在');
    }

    return childToRemove;
  }


}

export default Tree;

// unflatten函数将[{id,pid,data}...]形式的树组成层级的结构
// unflatten要求参数arr必须有的基本格式：
// [{ id, parent: { id } }];
// 其中顶级是不可以有parent的
export const Unflatten = (arr) => {
  if (arr.length === 0) {
    throw new Error('生成树时输入数组不能为空');
  }
  const tree = [];
  const mappedArr = {};
  let arrElem;
  let mappedElem;

  for (let i = 0, len = arr.length; i < len; i += 1) {
    arrElem = arr[i];
    mappedArr[arrElem.id] = arrElem;
    mappedArr[arrElem.id].children = [];
  }

  Object.keys(mappedArr).forEach((id) => {
    mappedElem = mappedArr[id];
    if (mappedElem.parent && mappedElem.parent.id) {
      mappedArr[mappedElem.parent.id].children.push(mappedElem);
    } else {
      tree.push(mappedElem);
    }
  });

  return tree;
};


// faltten函数将树拉平。需要对树进行遍历执行callback


// 测试（已经不可用，可以作为参考）

// 构造函数测试

// node构造测试
// var tree = new Tree('ceo');
// console.log(tree._root);

// arr构造测试
// const arr = [
//     { id: 1, pid: 0, name: 'SYSTEM' },
//     { id: 2, pid: 1, name: 'aa' },
//     { id: 3, pid: 2, name: 'aaa' },
//     { id: 4, pid: 2, name: 'b' },
//     { id: 5, pid: 0, name: 'c' },
//     { id: 6, pid: 5, name: 'cc' },
// ];
// const tree = new Tree(arr, 'arr');
// console.log(tree._root);

// 深度优先遍历测试
/*
   one

two(0) three(1)    four(2)

five(0)six(0)seven(2)
*/
// var tree = new Tree('one');

// tree._root.children.push(new Node('two'));
// tree._root.children[0].parent = tree;

// tree._root.children.push(new Node('three'));
// tree._root.children[1].parent = tree;

// tree._root.children.push(new Node('four'));
// tree._root.children[2].parent = tree;

// tree._root.children[0].children.push(new Node('five'));
// tree._root.children[0].children[0].parent = tree._root.children[0];

// tree._root.children[0].children.push(new Node('six'));
// tree._root.children[0].children[1].parent = tree._root.children[0];

// tree._root.children[2].children.push(new Node('seven'));
// tree._root.children[2].children[0].parent = tree._root.children[2];
// tree.traverseDF((currentNode)=>{
// console.log(currentNode.data);
// });

// 搜索方法测试
// tree.search((node)=>{
// if(node.data === 'two'){
// console.log(node);
// }
// },tree.traverseDF);

// 插入节点方法测试
// var tree = new Tree('one');
// tree.add('two', 'one', tree.traverseDF);
// console.log(tree._root);


// 删除节点测试
// tree.remove('three','one',tree.traverseDF);
// console.log(tree._root);

