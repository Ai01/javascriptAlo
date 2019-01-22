// 利用加法
var missingNumber = function(nums) {
  const len = nums.length;
  var sum = len*((len + 1)/2);

  for(let i = 0; i<len; i++) {
    sum -= nums[i];
  }

  return sum;
};

// 利用异或
var missingNumber2 = function(nums) {
  const len = nums.length;
  var res = len;

  for(let i = 0; i<len; i++) {
    res = res ^ i ^ nums[i];
  }

  return res;
};

