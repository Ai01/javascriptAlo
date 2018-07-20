const Tree = require('../binarySearchTree');
const { consoleTree } = require('./helper');

const tree = new Tree();
tree.insert(4);
tree.insert(5);
tree.insert(3);
tree.insert(2);
tree.insert(1);
tree.insert(6);
tree.insert(7);

consoleTree(tree);

module.exports = {
  treeInstance: tree,
}


