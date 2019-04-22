var mySqrt = function(x) {
  let low = 0;
  let high = x;
  let mid = Math.floor((low + high)/2);

  while(low <= high) {
    console.log(low, high);
    if(mid * mid > x) {
      high = mid - 1;
      mid = Math.floor((low + high)/2);
    } else if(mid * mid < x) {
      low = mid + 1;
      mid = Math.floor((low + high)/2);
    } else if(mid * mid === x) {
      return mid;
    }
  }

  return high;
};


console.log(mySqrt(8));
