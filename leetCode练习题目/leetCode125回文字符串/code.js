const Stack = require('../../数据结构/栈/src/stack');

const isPalindrome = function(s) {
  if (!s || !s.length) return true;

  // 用来判断当前字符是否是字符串，数字
  const isContainerLegal = a => {
    const reg = /[A-Za-z0-9]/;
    return reg.test(a);
  };

  // i从左边遍历，j从右边遍历
  for (let i = 0, j = s.length - 1; i < s.length; i++, j--) {
    // 如果i或者j不是合法内容。前进一步
    while (!isContainerLegal(s[i])) i++;
    while (!isContainerLegal(s[j])) j--;

    // 如果i到j了。或者i超过了j
    if (i >= j) return true;

    // 如果内容不同。那么不是回文
    if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;
  }
};

const isPalindrome2 = word => {
  if (!word || !word.length) return true;

  // 用来判断当前字符是否是字符串，数字
  const isContainerLegal = a => {
    const reg = /[A-Za-z0-9]/;
    return reg.test(a);
  };

  // 对word进行过滤，大小写转换
  let _word = '';
  for (let i = 0; i < word.length; i++) {
    if (isContainerLegal(word[i])) _word = `${_word}${word[i].toLowerCase()}`;
  }

  // 利用栈来存储反向的字符串
  const s = new Stack();
  for (let i = 0; i < _word.length; i++) {
    s.push(_word[i]);
  }

  let rWord = '';
  while (s.length() > 0) {
    rWord = `${rWord}${s.pop()}`;
  }

  // 判断是否相等
  if (rWord === _word) {
    return true;
  }

  return false;
};

const test = 'A man, a plan, a canal: Panama';

console.log(`${test}是否回文`, isPalindrome(test));
console.log(`${test}是否回文`, isPalindrome2(test));
