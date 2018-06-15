class Vertex {
  constructor(label, wasVisited) {
    this.label = label;
    this.wasVisited = wasVisited || false;
  }
}

class Graph {
  constructor(vertices) {
    // 顶点的集合
    this.vertices = [];
    if (Array.isArray(vertices)) {
      this.vertices = vertices;
    }
    // 边的条数
    this.edges = 0;
    // adj是邻接表
    this.adj = {};
    for (let i = 0; i < vertices.length; i++) {
      const vertexLabel = vertices[i].label;
      this.adj[vertexLabel] = [];
    }
  }

  // 添加顶点
  addVertex(data) {
    const { label } = data;
    const newVertex = new Vertex(label);
    this.vertices.push(newVertex);
  }

  // 删除顶点
  deleteVertex(data) {
    const { label } = data;

    // TODO:bai 如果删除节点那么怎么删除其它的节点和这个节点的边
    this.vertices = this.vertices.filter(a => a.label !== label);
  }

  // 添加边
  addEdge(from, to) {
    // TODO:bai 边不可以是一个class吗？
    this.adj[from].push(to);
    this.adj[to].push(from);
    this.edges += 1;
  }

  // 删除边
  deleteEdge(from, to) {
    this.adj[from] = this.adj[from].filter(item => {
      return item !== to;
    });
    this.adj[to] = this.adj[to].filter(item => {
      return item !== from;
    });
    this.edges -= 1;
  }


  // 广度优先搜索
  bfs(){

  }

  dfs(){

  }

}

module.exports = {
  Graph,
  Vertex,
};