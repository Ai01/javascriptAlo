// 二叉查找树测试

const BinarySearchTree = require('../binarySearchTree');
const { consoleTestName, consoleUnderLine } = require('../../../../utils/consoleUtils');

const Tree = new BinarySearchTree(4, { name: 'bai' });

consoleTestName('constructor');
console.log(Tree);
consoleUnderLine();

consoleTestName('insert');
Tree.insert(2);
Tree.insert(5, { name: 'bai' });
Tree.insert(3);
console.log(Tree);
consoleUnderLine();

consoleTestName('inOrderTraverse');
Tree.inOrderTraverse(Tree.getRootNode(), node => {
  console.log('node', node);
});
consoleUnderLine();

consoleTestName('preOrderTraverse');
Tree.preOrderTraverse(Tree.getRootNode(), node => {
  console.log('node', node);
});
consoleUnderLine();

consoleTestName('postOrderTraverse');
Tree.postOrderTraverse(Tree.getRootNode(), node => {
  console.log('node', node);
});
consoleUnderLine();

consoleTestName('getMin');
console.log(Tree.getMin());
consoleUnderLine();

consoleTestName('getMax');
console.log(Tree.getMax());
consoleUnderLine();

consoleTestName('find');
console.log(Tree.find(5));
console.log(Tree.find(3));

consoleUnderLine();
consoleTestName('remove');
Tree.remove(4);
console.log('after remove 4:', Tree);
Tree.remove(3);
console.log('after remove 5:', Tree);
consoleUnderLine();
