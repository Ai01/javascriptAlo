const {testGraph} = require('./graphInstance');


console.log(testGraph);

console.log('dfs');
testGraph.dfs(3, (item) => console.log(item));

console.log('bfs');
testGraph.bfs(3, (item) => console.log(item));
