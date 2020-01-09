/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i = 0;
    for(let j = 0; j < nums.length; j++) {
        if(nums[j] !== 0) { nums[i++] = nums[j] };
    }
    for(;i<nums.length;i++) {
        nums[i] = 0;
    }

    return nums;
};