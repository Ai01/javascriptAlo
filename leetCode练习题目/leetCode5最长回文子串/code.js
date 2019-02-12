const longestPalindrome = function(s) {
  if(typeof s === 'string' && s.length === 1) return s;

  const a = [];
  let max = 0;
  let res = "";

  for(let i = s.length - 1; i<s.length && i>=0; i--) {
    a[i] = [];
    for(let j = i; j <s.length; j++) {
      if(i === j) {
        a[i][j] = true;
      } else if(i === j - 1) {
        a[i][j] = (s[i] === s[j]);
      } else {
        a[i][j] = a[i+1][j-1] && (s[i] === s[j]);
      }
      if(a[i][j] && (j - i + 1) > max) {
        max = j - i;
        res = s.slice(i, j+1);
      }
    }
  }

  return res;
};

const str = "baab";
console.log(longestPalindrome(str));
