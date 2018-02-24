const {testGraph} = require('./graphInstance');

console.log('删除节点');

console.log(testGraph);
testGraph.deleteVertex({label:2});
console.log(testGraph);
