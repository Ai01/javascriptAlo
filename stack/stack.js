/**
 * 栈
 * 
 * 先入后出
 */


class Stack {
  
  constructor(){
    this.dataStore = []; 
    this.top = 0;
  }

  push(element){
    this.dataStore[this.top++] = element;
  }

  peek(index){
    return this.dataStore[index];
  }

  pop(){
    return this.dataStore[--this.top];
  }

  clear(){
    this.dataStore= [];
  }

  length(){
    return this.top
  }

}

const test = new Stack;

test.push(1);
console.log(test.dataStore);
test.push(2);
console.log(test.dataStore);
console.log(test.pop());
console.log(test.dataStore);
test.push(2);
test.push(2);
test.push(2);
console.log(test.peek(2));
console.log(test.length());
test.clear();
console.log(test.dataStore);