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

const dijkstra = (times, startIndex) => {
  // 把times改变为二维数组
  const changeTimesToMatrix = times => {
    // 获取点的个数
    const getVertexAmount = times => {
      var a = new Set();
      times.forEach(i => {
        const { start, end } = i || {};
        a.add(start);
        a.add(end);
      });

      return a.size;
    };
    const vertexAmount = getVertexAmount(times);

    // 填充二维数组
    const f = new Array(vertexAmount);
    times.forEach(i => {
      const { start, end, time } = i || {};
      if (!f[start]) {
        f[start] = new Array(vertexAmount).fill(Infinity);
      }

      f[start][end] = time;
    });

    f.forEach((i, index) => {
      i.forEach((__, jIndex) => {
        if (index === jIndex) {
          f[index][jIndex] = 0;
        }
      });
    });

    return f;
  };
  const matrix = changeTimesToMatrix(times);

  // 获取dis数组
  const dis = matrix[startIndex];
  const flag = new Array(dis.length).fill(false);

  // 对dis数组进行改变
  let tempStandard = 0;
  while (dis.length - 1 > tempStandard) {
    // 将当前顶点到其他顶点的距离改为以tempStandard为中转的距离
    flag[tempStandard] = true;
    for (let i = 0; i < dis.length; i++) {
      if (i !== tempStandard && isFinite(matrix[tempStandard][i])) {
        dis[i] = dis[tempStandard] + matrix[tempStandard][i];
      }
    }

    // 找到当前标准到其他顶点的最短距离
    // 把当前标准改为这个顶点
    const flagValues = [];
    flag.forEach((i, index) => {
      if (!i) {
        flagValues[index] = dis[index];
      }
    });

    let minFlagValues;
    flagValues.forEach(i => {
      if (!minFlagValues) {
        minFlagValues = i;
      } else if (minFlagValues > i) {
        minFlagValues = i;
      }
    });

    flag.forEach((i, index) => {
      if (!i && dis[index] === minFlagValues) {
        tempStandard = index;
      }
    });
  }

  return dis;
};

console.log(dijkstra(times, 0));
