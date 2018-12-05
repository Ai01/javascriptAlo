// 取余法来获取hash
// 拉链法来处理hash冲突

class Hash {
  constructor() {
    this.size = 1000;
    this.table = new Array(this.size);
  }

  hash(data) {
    var total = 0;
    for (var i = 0; i < data.length; i++) {
      total += data.charCodeAt(i);
    }
    return total % this.size;
  }

  insert(key, val) {
    // 对于数组大小无法自动扩充的语言来说。需要在这个地方来实现对数组的扩大

    var index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = [{key,value: val}];
    } else {
      const lastValue = this.get(key);
      if(!lastValue) {
        // 如果还没有插入过。那么将值新添加进去
        this.table[index].push({ key,value: val});
      } else {
        // 如果已经插入了将值改了
        this.table[index].forEach(i => {
          if(i && i.key === key ) {
            i.value = val;
          }
        });
      }
    }
  }

  get(key) {
    var pos = this.hash(key);

    let res = null;
    this.table[pos].forEach(i => {
      if(i && i.key === key) {res = i.value;}
    });

    return res;
  }

  show() {
    for (var i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i + ':' + this.table[i].map(i => i.value).join(','));
      }
    }
  }
}


module.exports = Hash;
