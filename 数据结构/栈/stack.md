# 栈

## 什么是栈

栈最根本的特性是后入先出（LIFO,last-in-first-out)。后进入栈的元素，会先出栈

## 栈应该有哪些操作

1. 栈中元素的获取，如果不在栈顶是不可以获取的。(pop)
2. 将元素压入栈顶。(push)
3. 预览栈中的元素。只读 (peek)
4. 预览栈顶的元素，为了减少使用 peek 的麻烦，读栈顶的操作比较频繁。只读 (top)
5. 清除栈内的所有元素。(clean)
6. 获取栈中元素的长度也就是数量 (length)
7. 获取栈底部的元素(bottom)

## 可运行代码

[栈](./src/stack.js)

[栈的测试](./src/test.js)

[回文](./example/palindrome.js)

[进制转换](./example/conversions.js)

[运算式计算](./example/expressionCal/app.js)


