var searchInsert = function(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  let middle = Math.floor(low + (high - low)/2);


  while(low <= high){
    if(nums[middle] === target) return middle;
    if(nums[middle] < target) low = middle + 1;
    if(nums[middle] > target) high = middle - 1;

    middle = Math.floor(low + (high - low)/2);
  }


  return low;
};

console.log(searchInsert([1], 0));
