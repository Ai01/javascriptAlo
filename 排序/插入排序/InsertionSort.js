// 插入排序
// 把要排序的数组分为了两个部分,
// 一部分是数组的全部元素(除去待插入的元素),
// 另一部分是待插入的元素;
// 先将第一部分排序完成, 然后再插入这个元素.
// 其中第一部分的排序也是通过再次拆分为两部分来进行的.

const array = [1, 4, 3, 6, 2, 1, 3, 8, 0, 19, 9];

function directInsertionSort(array) {
  var length = array.length;
  var index
  var current;
  for (var i = 1; i < length; i++) {
    index = i - 1; //待比较元素的下标
    current = array[i]; //当前元素
    while (index >= 0 && array[index] > current) {
      //前置条件之一:待比较元素比当前元素大
      array[index + 1] = array[index]; //将待比较元素后移一位
      index--; //游标前移一位
    }
    if (index + 1 !== i) {
      //避免同一个元素赋值给自身
      array[index + 1] = current; //将当前元素插入预留空位
    }
  }
  
  return array;
}

console.log(directInsertionSort(array));
