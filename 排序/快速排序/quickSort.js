// 快速排序
// 取中间值，将数组分为左右两部分，小于中间值的左边，大于中间值的右边。然后递归排序左右数组

const array = [1, 4, 3, 6];

const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivotLength = Math.floor(arr.length / 2);

  const left = [];
  const right = [];

  // 这里一定要使用splice方法。
  // 如果只是读取中间值而不改变原来的数组，在特殊情况下left或者right会是空。
  // 那么下一次递归非空的那一个数组会重复上一次的情况。导致爆栈
  const pivot = arr.splice(pivotLength, 1)[0];

  arr.forEach((item) => {
    if (item < pivot) {
      left.push(item);
    } else if (item > pivot) {
      right.push(item);
    } else if (item === pivot){
      right.push(item);
    }
  });

  // 因为使用了splice。所以这里需要重新concat
  return quickSort(left).concat([pivot], quickSort(right));
}

console.log(quickSort(array));
