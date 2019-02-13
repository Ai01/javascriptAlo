// 动态规划方法
const longestPalindrome = function(s) {
  if (typeof s === 'string' && s.length === 1) return s;

  const a = [];
  let max = 0;
  let res = '';

  for (let i = s.length - 1; i < s.length && i >= 0; i--) {
    a[i] = [];
    for (let j = i; j < s.length; j++) {
      if (i === j) {
        a[i][j] = true;
      } else if (i === j - 1) {
        a[i][j] = s[i] === s[j];
      } else {
        a[i][j] = a[i + 1][j - 1] && s[i] === s[j];
      }
      if (a[i][j] && j - i + 1 > max) {
        max = j - i;
        res = s.slice(i, j + 1);
      }
    }
  }

  return res;
};

// 从中间向两边扩展
const longestPalindrome2 = s => {
  if(typeof s === 'string' && s.length === 1) return s;

  const len = s.length - 1;

  let max = 0;
  let res = '';

  for (let i = 0; i < len; i++) {
    let j = i;
    let h = i;
    while (j >= 0 && h <= len && s[j] === s[h]) {
      if ((h - j + 1) > max) {
        max = h - j + 1;
        res = s.slice(j, h+1);
      }
      j--;
      h++;
    }

    let e = i;
    let f = i + 1;
    while (e >= 0 && f <= len && s[e] === s[f]) {
      if ((f - e + 1) > max) {
        max = f - e + 1;
        res = s.slice(e, f+1);
      }
      e--;
      f++;
    }
  }

  return res;
};

const str = 'cbba';
console.log(longestPalindrome2(str));
