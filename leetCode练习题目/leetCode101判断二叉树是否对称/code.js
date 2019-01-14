// 递归实现版本
const isSymmetric = function(root) {
  if(!root) return true;

  const _isSymmetric = (l, r) => {
    if(!l && !r) return true;

    if(l && r) {
      // 一颗树的左子树和右子树值相等,左子树的左子树和右子树的右子树相等相等，左子树的右子树和右子树的左子树值相等
      return l.val === r.val && _isSymmetric(l.left, r.right) && _isSymmetric(l.right, r.left);
    }

    return false;
  }

  return _isSymmetric(root.left, root.right);
};


class Stack {
  constructor(a) {
    this.data = [];
    if (Array.isArray(a)) {
      // 不再这里维护length，避免代码写的复杂
      this.data = [].concat(a);
    }
  }

  // 入栈
  push(e) {
    this.data.push(e);
  }

  // 出栈
  pop() {
    return this.data.pop();
  }

  // 查看栈中的对应index的内容
  peek(index) {
    return this.data[index];
  }

  // 查看栈的长度
  length() {
    return this.data.length;
  }

  // 查看栈顶的内容
  top() {
    return this.data[this.data.length - 1];
  }

  // 栈底的内容
  bottom() {
    return this.data[0];
  }

  // 清空栈
  clear() {
    this.data = [];
  }
}

// 用栈来实现
const isSymmetric2 = function(root) {
  if(!root) return true;

  const s = new Stack();

  s.push(root.left);
  s.push(root.right);

  while(s.length()) {
    const node1 = s.pop();
    const node2 = s.pop();

    if(node1 && node2 && node1.val === node2.val) {
      // 如果这两个节点存在，并且相等。那么将对应的子树按顺序压入栈中
      s.push(node1.left);
      s.push(node2.right);
      s.push(node1.right);
      s.push(node2.left);
    } else if(!node1 && !node2) {
      continue; // 如果两个节点都是null。那么继续
    } else {
      return false;
    }
  }

  return true;
};
