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

console.log('constructor测试:')
const test = new Stack([1, 2, 3]);
console.log(test);
console.log(test.length());
console.log('push测试:')
test.push(5);
console.log(test);
console.log(test.length());
console.log('pop测试:')
test.pop();
console.log(test);
console.log(test.length());
console.log(test.peek(2));
console.log('top测试:')
console.log(test.top());
console.log('clear测试:')
test.clear();
console.log(test);
console.log(test.length());
