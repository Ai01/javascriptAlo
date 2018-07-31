const Trie = require('./tried');
const { consoleUnderLine, consoleTree }  = require('../../../utils/consoleUtils');

var trie = new Trie();
trie.insert('I');
trie.insert('Love');
trie.insert('China');
trie.insert('China');
trie.insert('China');
trie.insert('China');
trie.insert('China');
trie.insert('xiaoliang');
trie.insert('xiaoliang');
trie.insert('man');
trie.insert('handsome');
trie.insert('love');
trie.insert('Chinaha');
trie.insert('her');
trie.insert('know');



var map = {};
trie.preTraversal(function(node, str) {
  if (node.isEnd) {
    map[str] = node.numEnd;
  }
});

for (var i in map) {
  console.log(i + ' 出现了' + map[i] + ' 次');
}

consoleUnderLine();

console.log('包含Chin（包括本身）前缀的单词及出现次数：', trie.countPrefix('Chin'));

consoleUnderLine();

consoleTree(trie);
