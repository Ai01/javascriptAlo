// 回文问题

const word1 = "asdfasfasfafds";
const word2 = "abccba";

class Stack {
  constructor(array) {
    this.data = [];
    if (array) {
      // 不再这里维护length，避免代码写的复杂
      this.data = [].concat(array);
    }
  }

  push(e) {
    this.data.push(e);
  }

  pop() {
      const _res = this.data.pop();
      return _res;
  }

  peek(index) {
    return this.data[index];
  }

  length(){
    return this.data.length;
  }

  top() {
    return this.data[this.data.length - 1];
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
  while (s.length() > 0) {
    rWord = `${rWord}${s.pop()}`;
  }
  if (rWord === word) {
    return true;
  }
  return false;
};

console.log(isPalindrome(word1));
console.log(isPalindrome(word2));
