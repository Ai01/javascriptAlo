const kmp = (str1, str2) => {
  if(str2 === "") return 0;
  // 获取str2的部分匹配表
  // TODO：获取匹配表的实现时间复杂度过高。得不偿失
  const getStrMatchTable = str => {
    const res = [];

    for(let i = 0; i<str.length; i++) {
      let index = i;
      const _str = str.slice(0, index) + str[0];

      // 获取前缀
      const pre = [];
      for (let i = 0; i < _str.length - 1; i++) {
        pre.push(_str.slice(-1, i));
      }

      // 获取后缀
      const last = [];
      for (let i = 1; i < _str.length; i++) {
        last.push(_str.slice(i, _str.length - 1));
      }

      // 获取前缀和后缀的相同的数量
      let _res = 0;
      pre.forEach(i => {
        last.forEach(j => {
          if (j === i) _res += 1;
        });
      });

      res[index] = _res;
    }

    return res;
  };
  const str2MatchTable = getStrMatchTable(str2);

  let res = -1;
  for(let i = 0; i<str1.length; i++) {
    if(str1.charAt(i) === str2.charAt(0)) {
      let _res = true;
      let j = 0;
      for(; j<str2.length; j++) {
        if(str2.charAt(j) !== str1.charAt(i + j)) {
          _res = false;
          break;
        }
      }

      if(_res) {
        res = i;
        break;
      } else {
        // 移动的位数 = 已匹配的字符数 - 对应的部分匹配值
        i = i + j - str2MatchTable[j];
      }
    }
  }

  return res;
};

kmp("mississippi", "issip");
