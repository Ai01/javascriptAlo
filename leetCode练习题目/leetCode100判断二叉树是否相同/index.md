# 判断二叉树是否相同

## 题目

给定两个二叉树，编写一个函数来检验它们是否相同。如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

示例 1:

```
输入:       1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

输出: true
```

示例 2:

```
输入:      1          1
          /           \
         2             2

        [1,2],     [1,null,2]

输出: false
```

示例 3:

```
输入:       1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

输出: false
```

## 解答

### 方法1

#### 思路

利用递归的思想:最简单的情况是一个只有两层的二叉树。如果两个树的根节点相等。
那么只要右子树和左子树都相等。那么就是同一个二叉树。
所以可以将问题递归的来解决。

#### 复杂度

时间复杂度：O(n)。因为需要遍历树。

空间负载度：O(1)。没有利用多余的存储结果 

### 方法2

#### 思路

利用栈。将对应的两个节点入栈，然后将两个节点出栈。如果两个节点相等，那么将两个节点对应
的子节点入栈。然后继续出栈对比。

#### 复杂度

时间复杂度：O(n)。因为需要遍历树

空间复杂度：O(n)。因为需要一个大小为n的栈







