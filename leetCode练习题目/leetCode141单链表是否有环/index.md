# 单链表是否有环


## 题目

这个题目说的是，给你一个单链表，你要判断它是否会形成环，也就是链表的最后一个节点指向了前面一个已经存在的节点。

## 方法


### 方法1

#### 思路

如果有环，那么一次遍历后可以发现重复节点。

#### 复杂度

时间复杂度: O(n)，遍历一次链表

空间复杂度: O(n),需要一个set存储节点

### 方法2

#### 思路

利用两个指针。初始间距为1，前指针一次走两位，后指针一次走一位。在后指针结束之前。如果有环那么前指针会追上后指针。

#### 复杂度

时间复杂度：O(n),无环是肯定的，有环时如何证明看视频。

空间复杂度：O(1)
