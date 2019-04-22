var singleNonDuplicate = function(nums) {
  if (!Array.isArray(nums) || !nums.length) {
    throw new Error('参数错误');
  }

  let low = 0;
  let high = nums.length - 1;
  let mid = Math.floor((low + high) / 2);

  let res;

  while (typeof res !== 'number' && low <= high) {
    console.log(mid);
    if (nums[mid] !== nums[mid + 1] && nums[mid] !== nums[mid - 1]) {
      res = mid;
      break;
    } else if (nums[mid] === nums[mid - 1]) {
      mid = mid - 1;
    }

    if ((mid - low) % 2 === 0) {
      low = mid + 2;
    } else {
      high = mid - 1;
    }
    mid = Math.floor((low + high) / 2);
  }

  return nums[res];
};

console.log('res', singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));
