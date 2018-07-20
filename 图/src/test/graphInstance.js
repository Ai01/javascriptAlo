const { Graph, Vertex } = require('../graph');

const vertexArray = [];

for (let i = 0; i < 10; i += 1) {
  vertexArray.push(new Vertex(i));
}

const testGraph = new Graph(vertexArray);

module.exports = {
  testGraph,
};
