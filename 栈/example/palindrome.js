// 回文问题
const Stack = require("../src/stack");

const word1 = "asdfasfasfafds";
const word2 = "abccba";

const isPalindrome = word => {
  const s = new Stack();
  for (let i = 0; i < word.length; i++) {
    s.push(word[i]);
  }
  let rWord = "";
  while (s.length() > 0) {
    rWord = `${rWord}${s.pop()}`;
  }
  if (rWord === word) {
    return true;
  }
  return false;
};

console.log(`${word1}是否为回文:`, isPalindrome(word1));
console.log(`${word2}是否为回文:`, isPalindrome(word2));
