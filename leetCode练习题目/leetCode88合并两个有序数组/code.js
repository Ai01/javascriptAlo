var merge = function(nums1, m, nums2, n) {
  let k = nums1.length - 1;
  let i = m > 0 ? m - 1 : -1;
  let j = n > 0 ? n - 1 : -1;

  while (i >= 0 && j >= 0 && k >= 0) {
    if (typeof nums1[i] === 'number' && typeof nums2[j] === 'number') {
      if (nums1[i] >= nums2[j]) {
        nums1[k] = nums1[i];
        k--;
        i--;
      } else {
        nums1[k] = nums2[j];
        k--;
        j--;
      }
    }
  }

  if (i >= 0 && j < 0) {
    for (let h = 0; h <= i; h++) {
      nums1[h] = nums1[h];
    }
  }

  if (j >= 0 && i < 0) {
    for (let h = 0; h <= j; h++) {
      nums1[h] = nums2[h];
    }
  }
  return nums1;
};

console.log(merge([0], 0, [1], 1));
