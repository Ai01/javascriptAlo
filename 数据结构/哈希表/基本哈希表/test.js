const Hash = require('./hashTable');

const someNames = ['David', 'Jennifer', 'Donnie', 'Raymond', 'Cynthia', 'Mike', 'Clayton', 'Danny', 'Jonathan'];
const hash = new Hash();

console.log('插入数据测试');
for (let i = 0; i < someNames.length; ++i) {
  hash.insert(someNames[i], someNames[i]);
}
hash.show();

console.log('获取数据测试');
for (let i = 0; i < someNames.length; ++i) {
  const val = hash.get(someNames[i]);
  console.log(someNames[i], val);
}
