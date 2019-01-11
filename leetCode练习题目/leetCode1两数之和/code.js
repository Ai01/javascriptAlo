// 利用hash表来实现
const twoSum = function(nums, target) {
  const _temp = {};

  for(let i = 0; i < nums.length; i++) {
    console.log(_temp, nums[i]);
    const res = target - nums[i];
    // 为了处理可能index是0
    if(typeof _temp[res] === 'number') {
      return [Math.min(_temp[res], i), Math.max(_temp[res], i)]
    } else {
      _temp[nums[i]] = i;
    }
  }
};

const nums = [2,7,11,15];
const target = 9;

console.log(twoSum(nums, target));
