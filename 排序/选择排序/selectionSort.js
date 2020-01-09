// 选择排序
// 从算法逻辑上看, 选择排序是一种简单且直观的排序算法. 它也是两层循环.
// 内层循环就像工人一样, 它是真正做事情的, 内层循环每执行一遍,
// 将选出本次待排序的元素中最小(或最大)的一个, 存放在数组的起始位置.
// 而外层循环则像老板一样, 它告诉内层循环你需要不停的工作, 直到工作完成
const array = [1, 4, 3, 6, 2, 1, 3, 8, 0, 19, 9];


function selectionSort(arr) {
    var len = arr.length;
    var minIndex, temp;
    for (var i = 0; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {     //寻找最小的数
                minIndex = j;                 //将最小数的索引保存
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

console.log(selectionSort(array));
