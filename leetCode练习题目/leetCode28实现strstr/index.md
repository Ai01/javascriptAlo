# 实现strstr

## 题目


这个题目说的是，你要实现 C 语言里面的 strstr 函数，这个函数接收两个字符串，
要找到第二个字符串在第一个字符串中的开始下标，如果找不到则返回 -1。

```
比如说，给你的两个字符串分别是：

marvel studio 和 studio

第二个字符串存在于第一个字符串中，于是你要返回它在第一个字符串中的开始下标 7。

再比如说给你的字符串是：

doctor strange 和 master

第二个字符串没有在第一个字符串中出现，因此返回 -1。
```

## 解答

### 方法1

#### 思路

暴力破解。利用两次循环来找到是否对应

#### 复杂度

时间复杂度：O((n-m+1)*m)

空间复杂度：O(1)
