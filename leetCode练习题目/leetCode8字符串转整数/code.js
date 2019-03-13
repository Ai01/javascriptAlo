const aoti = str => {
  let start = 0;
  let p = 0;
  let n = str.length;
  let negative = false;

  // 忽略前置空格
  while (p < n && str.charAt(p) === ' ') ++p;
  // 如果p和n相等。说明都是空格
  if (p === n) return 0;

  // 判断+，-号
  if (str.charAt(p) === '+') {
    ++p;
  } else if (str.charAt(p) === '-') {
    ++p;
    negative = true;
  }

  // 忽略前导0
  while (p < n && str.charAt(p) === '0') ++p;
  start = p;

  // 找到数字
  while (p < n && str.charAt(p) >= '0' && str.charAt(p) <= '9') ++p;
  // 如果p还是和start相等。说明字符串中不包含数字
  if(p === start) return 0;

  let num = 0;
  for(let i = start; i < p; ++i) {
    num = num * 10 + Number(str.charAt(i));
  }
  num = negative ? -num : num;

  return num;
};

aoti(" -42");
