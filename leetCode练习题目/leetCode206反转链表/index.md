# 反转链表


## 题目

反转一个单链表。

示例:

```
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
```

## 解答

### 方法1

#### 思路

利用双指针,保存当前节点now,和now前面的prev。然后将当前节点的next指向prev。循环这个过程

#### 复杂度

时间复杂度：O(n)

空间复杂度：O(1)

### 方法2

#### 思路

利用递归的思路。从最后一个节点开始。先将节点a的地址赋给a.next的next(a.next.next = a)。然后断开原本的指向next的链接(a.next = null)

参考资料：https://www.jianshu.com/p/34ba48bddae1

#### 复杂度

时间复杂度：O(n)

空间复杂度：O(1)
