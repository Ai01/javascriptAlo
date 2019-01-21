var isPalindrome = function(x) {
  var s = x.toString();
  if (!s || !s.length) return true;

  // i从左边遍历，j从右边遍历
  for (let i = 0, j = s.length - 1; i < s.length; i++, j--) {
    // 如果i到j了。或者i超过了j
    if (i >= j) return true;

    // 如果内容不同。那么不是回文
    if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;
  }
};


var isPalindrome2 = function(x) {
  if(x < 0) return false;
  if(x >=0 && x <= 9) return true;

  let tmp = x;
  let res = 0;

  while(Math.floor(tmp) > 0) {
    console.log(tmp, Math.floor(tmp % 10));
    res = res * 10 + Math.floor(tmp % 10);
    tmp = tmp / 10;
  }

  return res === x;
};

console.log('res', isPalindrome2(1001));
