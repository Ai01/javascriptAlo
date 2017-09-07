const array = [1,4,3,6,2,1,3,8,0,19,9];
const InsertionSort = (arr)=>{
	if(arr.length === 0){
		return [];
	}	
	for(let i =0; i<arr.length; i++){
		const ele = arr[i];	
		let j = i;
		for(; j>0 && arr[j-1]>ele; j--){
			arr[j] = arr[j-1];	
		}
		arr[j] = ele;
	};
	return arr;
}
console.log(InsertionSort(array));
