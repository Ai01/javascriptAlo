const treeify = require('treeify');

const consoleTree = tree =>
  console.log(
    treeify.asTree(tree, a => {
      return a.data;
    }),
  );

module.exports = {
  consoleTree,
};
