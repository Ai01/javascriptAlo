var hammingWeight = function(n) {
  let mask = 1;
  let count = 0;

  while(mask !== 0) {
    if((n & mask) !== 0) ++count;
    mask <<= 1;
  }

  return count;
};

hammingWeight(12);
