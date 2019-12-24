/**
* @description: 深度优先遍历
*
* @date: 2019/11/21 1:22 下午
*/
const tree = [{
  value: 1,
  children: [
    {
      value: 2,
      children: [{ value: 3 }],
    },
    {
      value: 4,
      children: [{ value: 5 }],
    },
  ],
}];

const dfs = (node, cb) => {
  if(!node) return;
  node.forEach(i => {
    if(!i) return;
    if(i.children && i.children.length) {
      dfs(i.children, cb);
    }
    cb(i.value);
  })
}

dfs(tree, v => console.log(v));
