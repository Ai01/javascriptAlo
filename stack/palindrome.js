// 回文问题

const word1 = "asdfasfasfafds";
const word2 = "abccba";

class Stack {
  constructor(array) {
    this.data = [];
    if (array) {
      this.data = [].concat(array);
    }
    this.length = this.data.length;
  }

  push(e) {
    this.data[this.length++] = e;
  }

  pop() {
    if (this.length >= 1) {
      const _res = this.data[--this.length];
      this.data.length = this.length;
      return _res;
    }
    throw new Error("stack已经空了");
  }

  peek(index) {
    if (index > this.length) {
      throw new Error(`超过栈的长度${this.length}`);
    }
    return this.data[index];
  }

  top() {
    // -1不可以忘记
    return this.data[this.length - 1];
  }

  clear() {
    this.data = [];
  }
}

const isPalindrome = word => {
  const s = new Stack();
  for (let i = 0; i < word.length; i++) {
    s.push(word[i]);
  }
  let rWord = "";
  while (s.length > 0) {
    rWord = `${rWord}${s.pop()}`;
  }
  if (rWord === word) {
    return true;
  }
  return false;
  // for (let i = 0; i < word.length; i++) {
  //   if (s.peek(s.length - 1 - i) !== word[i]) {
  //     return false;
  //   }
  // }
  // return true;
};

console.log(isPalindrome(word1));
console.log(isPalindrome(word2));
