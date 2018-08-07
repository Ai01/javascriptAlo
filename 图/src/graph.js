// 无向，不加权图

//

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
    const { label: deleteLabel } = data;

    // 删除节点
    this.vertices = this.vertices.filter(a => a.label !== deleteLabel);

    // 删除节点的边
    this.adj[deleteLabel].forEach(item => {
      this.deleteEdge(deleteLabel, item);
    });

    delete this.adj[deleteLabel];
  }

  // 添加边
  addEdge(from, to) {
    this.adj[from].push(to);
    // this.adj[to].push(from);
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
  // TODO：bai 图的遍历中有重复节点
  bfs(start, cb) {
    const bfsImpl = (value, cb) => {
      if (!Array.isArray(value)) {
        return null;
      }

      value.forEach(item => {
        if (typeof cb === 'function') {
          cb(item);
        }

        const edges = this.adj[item];
        bfsImpl(edges, cb, item);
      });
    };

    if (this.adj[start]) {
      bfsImpl(this.adj[start], cb);
    }
  }

  // 深度优先搜索
  // TODO：bai 图的遍历中有重复节点
  dfs(start, cb) {
    const dfsImpl = (value, cb) => {
      if (!Array.isArray(value)) {
        return null;
      }

      value.forEach(item => {
        const edges = this.adj[item];
        dfsImpl(edges, cb, item);

        if (typeof cb === 'function') {
          cb(item);
        }
      });
    };

    if (this.adj[start]) {
      dfsImpl(this.adj[start], cb);
    }
  }
}

module.exports = {
  Graph,
  Vertex,
};
