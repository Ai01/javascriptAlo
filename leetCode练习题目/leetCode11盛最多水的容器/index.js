var maxArea = function(height) {
  let i = 0;
  let j = height.length - 1;

  let max = 0;

  while (i < j) {
    const res = (j - i) * Math.min(height[i], height[j]);
    if (res > max) max = res;
    if (height[j] < height[i]) {
      j--;
    } else {
      i++;
    }
  }

  return max;
};
