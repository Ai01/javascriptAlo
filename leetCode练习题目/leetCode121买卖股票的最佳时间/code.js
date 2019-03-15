var maxProfit = function(prices) {
  let i = 0;
  let j = 1;
  let res = 0;
  for(;j<prices.length;j++) {
    if(prices[j] - prices[i] > res) res = prices[j] - prices[i];
    if(prices[j] < prices[i]) i = j;
  }

  return res;
};
