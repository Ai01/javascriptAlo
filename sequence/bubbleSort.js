// 冒泡排序
// 冒泡排序需要两个嵌套的循环. 其中, 外层循环移动游标; 内层循环遍历游标及之后(或之前)的元素, 通过两两交换的方式, 每次只确保该内循环结束位置排序正确, 然后内层循环周期结束, 交由外层循环往后(或前)移动游标, 随即开始下一轮内层循环, 以此类推, 直至循环结束

const array = [1, 4, 3, 6, 2, 1, 3, 8, 0, 19, 9];

const swap = (i, j, array) => {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}

const bubbleSort = (arr) => {
  const length = arr.length;
  let isSwap;


  for (let i = 0; i < length; i++) {
    isSwap = false;
    for (let j = 0; j < length - 1 - i; j++) {
      array[j] > array[j + 1] && (isSwap = true) && swap(j, j + 1, array);
    }
    if (!isSwap) {
      break;
    }
  }
  return array;
}

console.log(bubbleSort(array));