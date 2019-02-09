// 摩尔投票法实现
var majorityElement = function(nums) {
  let num = null;
  let count = null;

  for(let i=0; i<nums.length; i++) {
    if(typeof num !== 'number' || typeof count !== 'number') {
      num = nums[i];
      count = 1;
    } else {
      if(count === 0) {
        num = nums[i];
        count = 1;
      } else {
        if(num === nums[i]) {
          count += 1;
        } else {
          count -= 1;
        }
      }
    }

  }

  return num;
};
