const treeify = require('treeify');

const consoleTestName = name => {
  console.log(`${name}测试`);
};

const consoleUnderLine = () => {
  console.log('---------------------------------------------------');
};

const consoleTree = (tree, name) => {
  if(name)  {
    console.log('name:', name);
  }
  console.log(treeify.asTree(tree, a => {
   return a.data;
  }));
};

module.exports = {
  consoleTestName,
  consoleUnderLine,
  consoleTree,
};
