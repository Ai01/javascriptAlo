class TrieNode {
  constructor() {
    this.numPass = 0; // 有多少个单词经过这个节点
    this.numEnd = 0; // 有多少个单词就此结束
    this.edges = [];
    this.value = ''; // value为单个字符
    this.isEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  isValid(str) {
    return /^[a-z1-9]+$/i.test(str);
  }

  insert(word) {
    if (!this.isValid(word)) {
      return false;
    }

    var cur = this.root;

    for (var i = 0; i < word.length; i++) {
      var c = word.charCodeAt(i);
      c -= 48; // 减少0的charCode

      var node = cur.edges[c];

      if (!node) {
        node = cur.edges[c] = new TrieNode();
        node.value = word.charAt(i);
        node.numPass = 1; // 有N个字符串经过它
      } else {
        node.numPass++;
      }

      cur = node;
    }
    cur.isEnd = true;
    cur.numEnd++;

    return true;
  }

  // 广度优先遍历
  preTraversal(cb) {
    const preTraversalImpl = (root, str, cb) => {
      cb(root, str);
      for (let i = 0, n = root.edges.length; i < n; i++) {
        let node = root.edges[i];
        if (node) {
          preTraversalImpl(node, str + node.value, cb);
        }
      }
    };

    preTraversalImpl(this.root, '', cb);
  }

  // 在字典树中查找是否存在某字符串为前缀开头的字符串（包括字符串本身）
  isContainerPrefix(word) {
    if (!this.isValid(word)) {
      return false;
    }

    var cur = this.root;

    for (var i = 0; i < word.length; i++) {
      var c = word.charCodeAt(i);
      c -= 48; // 减少0的charCode

      if (cur.edges[c]) {
        cur = cur.edges[c];
      } else {
        return false;
      }
    }

    return true;
  }

  // 在字典树中查找是否存在某字符串
  isContainerWord(word) {
    if (!this.isValid(word)) {
      return false;
    }

    var cur = this.root;

    for (let i = 0; i < word.length; i++) {
      var c = word.charCodeAt(i);
      c -= 48; // 减少0的charCode

      if (cur.edges[c]) {
        cur = cur.edges[c];
      } else {
        return false;
      }
    }

    return cur.isEnd;
  }

  // 统计以指定字符串为前缀的字符串数量
  countPrefix(word) {
    if (!this.isValid(word)) {
      return false;
    }

    var cur = this.root;

    for (let i = 0; i < word.length; i++) {
      var c = word.charCodeAt(i);
      c -= 48; // 减少0的charCode

      if (cur.edges[c]) {
        cur = cur.edges[c];
      } else {
        return false;
      }
    }

    return cur.numPass;
  }

  // 统计某字符串出现的次数
  countWord(word) {
     if (!this.isValid(word)) {
      return false;
    }

    var cur = this.root;

    for (let i = 0; i < word.length; i++) {
      var c = word.charCodeAt(i);
      c -= 48; // 减少0的charCode

      if (cur.edges[c]) {
        cur = cur.edges[c];
      } else {
        return false;
      }
    }

    return cur.numEnd;
  }
}

module.exports = Trie;
