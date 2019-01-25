var maxSubArray = function(nums) {
  let maxSum = null;
  let cur = 0;
  for(let i = 0; i<nums.length; i++) {
    if(cur < 0) {
      cur = nums[i];
    } else {
      cur += nums[i];
    }

    if(typeof maxSum !== 'number') {
      maxSum = cur;
    } else if(cur > maxSum) maxSum = cur;
  }

  return maxSum;
};
