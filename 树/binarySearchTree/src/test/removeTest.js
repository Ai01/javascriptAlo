const { treeInstance } = require('./binarySearchTreeInstance');
const { consoleTree } = require('./helper');

console.info('删除2');
treeInstance.remove(2);
consoleTree(treeInstance);

console.info('删除6');
treeInstance.remove(6);
consoleTree(treeInstance);
