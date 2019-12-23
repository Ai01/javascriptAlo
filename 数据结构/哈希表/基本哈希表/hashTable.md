# 哈希表

## 哈希表是什么

哈希表（Hash table，也叫散列表），是根据关键码值(Key value)而直接进行访问的数据结构。
也就是说，它通过把关键码值映射到数组中一个位置来访问记录，以加快查找的速度。

这个映射函数叫做散列函数，存放记录的数组叫做散列表。

## 哈希表的作

链表易于插入，删除。不易于查找。
数组易于查找。不易于插入，删除。
哈希表解决了这两个问题。(数组的扩展哈希表负责解决)

## 哈希表的实现

- 插入：把Key通过哈希函数获得一个整型数字当作数组的下标，将value存储在以该数字为下标的数组空间里。
- 读取：再次使用哈希函数将key转换为对应的数组下标，并定位到该空间获取value，

从上面的介绍中可以看出实现hash表的关键是:

- 哈希函数的实现

    - 如何保证唯一性
    - 如何高效

- 数组自动扩容(在js中这不是问题);

### 哈希函数实现

这里介绍两种比较有代表性的方法。其他的方法在参考资料中

- 直接地址发

    以关键字的某个线性函数值为哈希地址，可以表示为
    
        hash(K)=aK+C
        
    优点是不会产生冲突，缺点是空间复杂度可能会较高，适用于元素较少的情况
    
- 除留余数法：

    它是由数据元素关键字除以某个常数所留的余数为哈希地址，该方法计算简单，适用范围广，是经常使用的一种哈希函数，可以表示为    
    
        hash(K)=K mod C
        
    该方法的关键是常数的选取，一般要求是接近或等于哈希表本身的长度，研究理论表明，该常数选素数时效果最好    
    
## 哈希冲突的解决方法

对于两个不同的关键字，通过我们的哈希函数计算哈希地址时却得到了相同的哈希地址，这种现象称为哈希冲突。
像上面的除留余数法就会造成哈希冲突

当发生哈希冲突的时候如何解决哈希冲突呢

- 再哈希法
- 开放地址法

具体内容在参考资料中
    
## 实现代码 

没有处理hash冲突
```js

// 没有处理hash冲突
class Hash{
    constructor(){
        this.table = new Array(1024);
    }
    hash(data) {
    //就将字符串中的每个字符的ASCLL码值相加起来，再对数组的长度取余
        var total = 0;
        for(var i = 0; i < data.length; i++) {
            total += data.charCodeAt(i);
        }
        console.log("Hash Value: " +data+ " -> " +total);
        return total % this.table.length;
    }
    insert(key, val){
        var pos = this.hash(key);
        this.table[pos] = val;
    }
    get(key){
        var pos = this.hash(key);
        return this.table[pos] 
    }
    show(){
        for(var i = 0; i < this.table.length; i++) {
            if(this.table[i] != undefined) {
                console.log(i + ":" +this.table[i]);
            }
        }
    }
    }
    
```    

具体的可用实现在js文件中


## 参考资料

1. [js实现哈希表](https://segmentfault.com/a/1190000013132249)
2. [从java的角度认识hash表](https://blog.csdn.net/v_JULY_v/article/details/6256463)
3. [java中hash表的大小选择](https://www.cnblogs.com/wzyxidian/p/5379260.html)


