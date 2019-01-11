// 相对于第一版的改进算法

// 改进点：
// 1。 不在使用二维数组。使用邻接表来表示图。减少浪费的空间
// 2。 去除在改变dis的时候对dis的依赖

const { consoleTree } = require('../../../utils/consoleUtils');

const times = [
  { start: 0, end: 1, time: 1 },
  { start: 0, end: 2, time: 12 },
  { start: 1, end: 2, time: 9 },
  { start: 1, end: 3, time: 3 },
  { start: 2, end: 4, time: 5 },
  { start: 3, end: 2, time: 4 },
  { start: 3, end: 4, time: 13 },
  { start: 3, end: 5, time: 15 },
  { start: 4, end: 5, time: 4 },
];

const dijkstra = (times, startNode) => {
  // 将times转换为adj
  const changeTimesToAdj = times => {
    const res = {};
    times.forEach(i => {
      const { start, end, time } = i || {};
      if (!Array.isArray(res[start])) {
        res[start] = [{ end, time }];
      } else {
        res[start].push({ end, time });
      }
    });

    return res;
  };
  const adjacency = changeTimesToAdj(times);

  // 获取点的个数
  // 不是邻接表的长度。因为可能有的点是没有出度的
  const getAllVertex = times => {
    var a = new Set();
    times.forEach(i => {
      const { start, end } = i || {};
      a.add(start);
      a.add(end);
    });

    return a;
  };
  const allVertex = getAllVertex(times);

  const dis = new Map(); // dis。startNode到各点的最短距离
  const flag = new Map(); // flag。标记dis中的值是否已经是最短

  // 将所有的点注册到dis，flag中
  allVertex.forEach(i => {
    dis.set(i, Infinity);
    flag.set(i, false);
  });

  // startNode在dis和flag中的值
  dis.set(startNode, 0);
  if(Array.isArray(adjacency[startNode])) {
    adjacency[startNode].forEach(i => {
      const { end } = i || {};
      flag.set(end, true);
    });
  }

  if(Array.isArray(adjacency[startNode])) {
    adjacency[startNode].forEach(i => {
      const { end, time } = i || {};
      dis.set(end, time);
    });
  }


  const getNodeInAdj = (startNodeKey, endNodeKey) => {
    return Array.isArray(adjacency[startNodeKey]) ? adjacency[startNodeKey].find(i => {
      if (i && i.end === endNodeKey) return true;
      return false;
    }) : null;
  };

  // 判断flag中是否还是有false
  const flagHasFalse = values => {
    let res = false;
    values.forEach(i => {
      if (!i) res = true;
    });

    return res;
  };

  // 对dis数组进行改变。当flag中还显示有点不是最短距离的时候就进行改变
  let tempStandard = startNode;
  while (flagHasFalse(flag)) {
    // tempStandard用来表示当前情况下。dis中所有不确定是否是最短距离中的点中,离startNode,距离最近的点
    flag.set(tempStandard, true);

    // 将当前顶点到其他顶点的距离改为以tempStandard为中转的距离
    for(let key of dis.keys()) {
      const endNode = getNodeInAdj(tempStandard, key);
      if (key !== tempStandard && endNode && isFinite(endNode.time) && !flag.get(key)) {
        dis.set(key, dis.get(tempStandard) + endNode.time);
      }
    }

    // 找到dis中不是最短距离的点中的最短距离。把当前标准改为这个顶点
    // 根据flag中的值是否是false来判断
    let a = null;
    for (let key of flag.keys()) {
      const value = flag.get(key);
      const time = dis.get(key);
      if (!value) {
        if (!a || (isFinite(time) && time < a.time)) {
          a = { key, time };
        }
      }
    }

    tempStandard = a ? a.key : null;
  }

  return dis;
};

console.log(dijkstra(times, 0));
