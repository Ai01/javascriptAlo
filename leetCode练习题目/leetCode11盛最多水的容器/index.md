# 盛水最多的容器

## 题目

给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai)。
在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。
找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。


## 方法

### 方法1

#### 思路

利用两个游标。从左右两边分别向中间靠拢。每次移动高度较小的游标

#### 复杂度

时间复杂度：O(n)
 
空间复杂度: O(1)
