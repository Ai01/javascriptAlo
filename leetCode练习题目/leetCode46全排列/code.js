// 递归实现
const getRes = arr => {
  let res = [];
  if (arr.length === 1) {
    return arr;
  }
  for (let i = 0; i < arr.length; i++) {

    // 将数组除i之外的元素存储起来，成为一个新数组，并且获取新数组的排序结果
    const __arr = [...arr];
    __arr.splice(i, 1);
    const resForRest = getRes(__arr);

    for (let j = 0; j < resForRest.length; j++) {
      res.push([arr[i]].concat(resForRest[j]));
    }
  }
  return res;
};

const nums = [1, 2, 3, 4];

console.log('res', getRes(nums));
