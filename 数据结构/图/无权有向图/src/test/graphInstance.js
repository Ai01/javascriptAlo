const { Graph, Vertex } = require('../graph');

const vertexArray = [];

for (let i = 0; i < 10; i += 1) {
  vertexArray.push(new Vertex(i));
}

const testGraph = new Graph(vertexArray);


testGraph.addEdge(1, 2);
testGraph.addEdge(3, 4);
testGraph.addEdge(3, 2);
testGraph.addEdge(3, 1);
testGraph.addEdge(3, 5);

module.exports = {
  testGraph,
};
