/**
* @description: 广度优先遍历
*
* @date: 2019/11/21 1:23 下午
*/
const tree = [{
  value: 1,
  children: [
    {
      value: 2,
      children: [{ value: 3 }, { value: 6 }],
    },
    {
      value: 4,
      children: [{ value: 5 }, { value: 7 }],
    },
  ],
}];

const bfs = (tree, cb) => {
  if(!tree) return;

  // 需要先将下一层的数据存储
  // 这是广度优先遍历最重要的部分。现将下一层的数据存储起来
  let nextLevel = [];
  tree.forEach(i => {
    if(!i) return;
    cb(i.value);
    if(i.children && i.children.length) {
      nextLevel = nextLevel.concat(i.children);
    }
  });

  if(nextLevel.length) bfs(nextLevel, cb);
};

bfs(tree, v => console.log(v));
