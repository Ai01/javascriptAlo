/**
 * 栈
 *
 * 先入后出
 */

// class Stack {

//   constructor(){
//     this.dataStore = [];
//     this.top = 0;
//   }

//   push(element){
//     this.dataStore[this.top++] = element;
//   }

//   peek(index){
//     return this.dataStore[index];
//   }

//   pop(){
//     return this.dataStore[--this.top];
//   }

//   clear(){
//     this.dataStore= [];
//   }

//   length(){
//     return this.top
//   }

// }

// const test = new Stack;

// test.push(1);
// console.log(test.dataStore);
// test.push(2);
// console.log(test.dataStore);
// console.log(test.pop());
// console.log(test.dataStore);
// test.push(2);
// test.push(2);
// test.push(2);
// console.log(test.peek(2));
// console.log(test.length());
// test.clear();
// console.log(test.dataStore);

// 我的实现
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

const test = new Stack([1, 2, 3]);
console.log('constructor')
console.log(test);
console.log(test.length);
console.log('push')
test.push(5);
console.log(test);
console.log(test.length);
console.log('pop')
test.pop();
console.log(test);
console.log(test.length);
console.log(test.peek(2));
console.log('top')
console.log(test.top());
console.log('clear')
test.clear();
console.log(test);
