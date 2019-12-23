// 冒泡排序
// 冒泡排序需要两个嵌套的循环. 其中:
// 外层循环移动游标;
// 内层循环遍历游标及之后的元素,
// 通过两两交换的方式, 每次只确保该内循环结束位置排序正确,
// 然后内层循环周期结束, 交由外层循环往后移动游标,
// 随即开始下一轮内层循环, 以此类推, 直至循环结束

const array = [10, 4, 3, 6, 2, 1, 3, 8, 0, 19, 9];

const bubbleSort = arr => {
  if (arr.length <= 1) {
    return arr;
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
    console.log(arr);
  }

  return arr;
};

// 从大到小排序
const bubbleSortFromBiggerToSmaller = arr => {
  if (arr.length <= 1) {
    return arr;
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] < arr[j + 1]) {
        // 只需要改变这里的判断就是大小顺序的改变
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
    console.log(arr);
  }

  return arr;
};

// console.log(bubbleSort(array));
console.log(bubbleSortFromBiggerToSmaller(array));

// 优化后的冒泡排序
function bestBubbleSort(arr) {
  const array = [...arr];
  // 防止以及排好序的数组还是重新排序一遍
  let isOk = true;
  for (let i = 0, len = array.length; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (array[i] > array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        isOk = false;
      }
    }
    if (isOk) {
      break;
    }
  }
  return array;
}
