// 选择排序
// 从算法逻辑上看, 选择排序是一种简单且直观的排序算法. 它也是两层循环. 内层循环就像工人一样, 它是真正做事情的, 内层循环每执行一遍, 将选出本次待排序的元素中最小(或最大)的一个, 存放在数组的起始位置. 而 外层循环则像老板一样, 它告诉内层循环你需要不停的工作, 直到工作完成
const array = [1, 4, 3, 6, 2, 1, 3, 8, 0, 19, 9];

const selectionSort = (arr) => {
  const len = arr.length;
  if (len <= 1) {
    return arr;
  }

  for (let i = 0; i < len; i++) {
    let j = i;
    for (; j < len; j++) {
      if (arr[j] < arr[i]) {
        let elen = arr[j];
        arr[j] = arr[i];
        arr[i] = elen;
      }
    }
  }

  return arr;
}

console.log(selectionSort(array));