const { testGraph } = require('./graphInstance');

testGraph.addEdge(1, 3);
testGraph.addEdge(2, 4);
testGraph.addEdge(3, 2);

console.log(testGraph);

console.log('deleteEdge test');

testGraph.deleteEdge(3, 2);

console.log(testGraph);
