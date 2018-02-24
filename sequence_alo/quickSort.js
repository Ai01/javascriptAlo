// 快速排序
// 将数组分为左右两部分，小于中间值的左边，大于中间值的右边。然后递归concat
const array = [1, 4, 3, 6, 2, 1, 3, 8, 0, 19, 9];

const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivotLength = Math.floor(arr.length / 2);

  const left = [];
  const right = [];
  const pivot = arr.splice(pivotLength, 1)[0];

  arr.forEach((item) => {
    if (item < pivot) {
      left.push(item);
    } else if (item > pivot) {
      right.push(item);
    } else if (item === pivot){
      right.push(item);
    }
  })

  return quickSort(left).concat([pivot], quickSort(right));
}

console.log(quickSort(array));