const findKthSmallestInSortedArray = (nums1, nums2, k) => {
  let len1 = nums1.length;
  let len2 = nums2.length;

  let base1 = 0;
  let base2 = 0;

  while(true) {
    if(len1 === 0) return nums2[base2+k-1];
    if(len2 === 0) return nums1[base1+k-1];
    if(k===1) return Math.min(nums1[base1], nums2[base2]);

    let i = Math.min(Math.floor(k/2), len1);
    let j = Math.min(k-i, len2);
    let a = nums1[base1 + i - 1];
    let b = nums2[base2 + j - 1];

    if(i+j === k && a === b) return a;

    if(a<=b) {
      base1 += i;
      len1 -= i;
      k -= i;
    }

    if(a>=b) {
      base2 += j;
      len2 -= j;
      k -= j;
    }
  }
}

const findMedianSortedArrays = function(nums1, nums2) {
  const m = nums1.length;
  const n = nums2.length;
  const len = m + n;
  if((len % 2) === 1) {
    // 奇数
    return findKthSmallestInSortedArray(nums1, nums2, (m+n+1)/2);
  } else {
    // 偶数
    const a = findKthSmallestInSortedArray(nums1, nums2, (m+n)/2);
    const b = findKthSmallestInSortedArray(nums1, nums2, (m+n+2)/2);
    return (a+b)/2;
  }
};

// console.log(findMedianSortedArrays([1,2], [3,4]));
console.log(findKthSmallestInSortedArray([1,2,6,7,8], [3,4,5,7,9], 4));
