// 插入排序 
// 把要排序的数组分为了两个部分, 一部分是数组的全部元素(除去待插入的元素), 另一部分是待插入的元素; 先将第一部分排序完成, 然后再插入这个元素. 其中第一部分的排序也是通过再次拆分为两部分来进行的.
const array = [1, 4, 3, 6, 2, 1, 3, 8, 0, 19, 9];
const InsertionSort = (arr) => {
	if (arr.length === 0) {
		return [];
	}
	for (let i = 0; i < arr.length; i++) {
		const ele = arr[i];
		let j = i;
		for (; j > 0 && arr[j - 1] > ele; j--) {
			arr[j] = arr[j - 1];
		}
		arr[j] = ele;
	};
	return arr;
}
console.log(InsertionSort(array));