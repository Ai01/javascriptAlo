/**
 * 图算法
 */

// 工具函数
function print(s) {
  console.log(s);
}

// 顶点构造函数
function Vertex(label, wasVisited) {
  this.label = label;
  this.wasVisited = wasVisited;
}

// addEdge
function addEdge(v, w) {
  this.adj[v].push(w);
  this.adj[w].push(v);
  this.edges++;
}

// toStirng
var toString = Object.toString;

// showGraph
function showGraph() {
  for (var i = 0; i < this.vertices; ++i) {
    print(i + "->");
    for (var j = 0; j < this.vertices; ++j) {
      if (this.adj[i][j] != undefined) {
        print(this.adj[i][j] + " ");
      }
    }
    print(' ');
  }
}

// dfs
function dfs(v) {
  this.marked[v] = true;
  if (this.adj[v] != undefined) {
    print("Visited vertex: " + v);
  }
  for (var w in this.adj[v]) {
    var _value = this.adj[v][w];
    if (!this.marked[_value]) {
      this.dfs(_value);
    }
  }
}

// bfs
function bfs(s) {
  var queue = [];
  this.marked[s] = true;
  queue.push(s);
  while (queue.length > 0) {
    var v = queue.shift();
    if (this.adj[v] != undefined) {
      print("Visited vertex: " + v);
    }
    for (var w in this.adj[v]) {
      var _value = this.adj[v][w];
      if (!this.marked[_value]) {
        this.marked[_value] = true;
        queue.push(_value);
      }
    }
  }
}

// graph
function Graph(v) {
  // vertices代表顶点数
  this.vertices = v;
  this.edges = 0;
  // adj是边的
  this.adj = [];
  for (var i = 0; i < this.vertices; ++i) {
    this.adj[i] = [];
    this.adj[i].push("");
  }
  this.addEdge = addEdge;
  this.toString = toString;
  this.showGraph = showGraph;
  this.dfs = dfs;
  this.bfs = bfs;
  this.marked = [];
  for (var i = 0; i < this.vertices; ++i) {
    this.marked[i] = false;
  }
}



//test
var g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);



// showGraph test
// g.showGraph();

// dfs test
// g.dfs(0);

// bfs test
g.bfs(0);


