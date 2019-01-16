// 自己的实现
// const getRestNums = (arr, index) => {
//   var res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i !== index) {
//       res[i] = arr[i];
//     } else {
//       res[i] = false;
//     }
//   }
//   return res.filter(i => typeof i === 'number');
// };
//
// var permute = function(nums) {
//   if (!nums || !nums.length) return [];
//   if (nums.length === 1) return [nums];
//
//   const res = [];
//
//   for (let i = 0; i < nums.length; i++) {
//     const ele = nums[i];
//     const rest = permute(getRestNums(nums, i));
//
//     for (let j = 0; j < rest.length; j++) {
//       res.push([ele].concat(rest[j]));
//     }
//   }
//
//   return res;
// };

// 标准答案
// 告诉我，在对数组的操作过程中，可以使用下标来实现定位，改变。不一定要创建一个新的数组
let permute = function(nums) {
  let res = [];
  helper(res, nums, 0);
  return res;
};

let helper = function(res, nums, pos) {
  if (pos === nums.length - 1) {
    res.push(nums.slice());
  } else {
    // 这个地方比我写的答案好的地方在于，用下表来实现来对数组的剩余部分的确认。而不是像我的写法中，来创建一个新的数组。这样减少来空间复杂度。
    for(let i = pos; i < nums.length; ++i) {
      [nums[pos], nums[i]] = [nums[i], nums[pos]];
      helper(res, nums, pos + 1);
      [nums[pos], nums[i]] = [nums[i], nums[pos]];
    }
  }
}

const nums = [1, 2, 3];

console.log('res', permute(nums));
