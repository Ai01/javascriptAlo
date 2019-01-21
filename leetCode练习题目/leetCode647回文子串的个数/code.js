var countSubstrings = function(s) {
  if (!s) return 0;
  if (s.length === 1) return 1;

  // 生成二维数组
  const res = [];
  for(let i = 0; i<s.length;i++) {
    res[i] = new Array(s.length);
  }
  let count = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j < s.length; j++) {
      if (i === j) {
        res[i][j] = 2;
      } else if ((i + 1) === j) {
        res[i][j] = s[i] === s[j];
      } else {
        res[i][j] = res[i + 1][j - 1] && s[i] === s[j];
      }

      if (res[i][j]) count += 1;
    }
  }

  return count;
};

const countSubstrings2 = (s) => {
  if(!s) return 0;
  if (s.length === 1) return 1;

  let count = 0;

  for(let i = 0; i < s.length; i++) {
    let _i = i;
    let j = _i;
    while(_i >= 0 && j < s.length && s[_i] === s[j]) {
      count ++;
      _i--;
      j++;
    }
  }

  // 字符串长度为偶数的时候可能会是中心为两个字符
  for(let i = 0; i < s.length; i++) {
    let _i = i;
    let j = _i + 1;
    while(_i >= 0 && j < s.length && s[_i] === s[j]) {
      count ++;
      _i--;
      j++;
    }
  }

  return count;
};

const s = 'aba';
const s1 = 'abba';
console.log('res', countSubstrings(s));
console.log('res2', countSubstrings2(s));
