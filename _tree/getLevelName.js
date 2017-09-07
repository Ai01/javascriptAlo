// 根据给定的数据获得指定的数据拼接
// 下面实例中要求根据指定的数据结构实现将数据的name拼接为：
// 第一级name + 第二级name + 第三级name + ...
// 意思就是从第一级向下遍历寻找指导这个分枝下的最后一级。然后将之一个路线上的所有经过的name拼起来。

const a = [{
    name: '1-0',
    children: [{
        name: '2-0',
        children: [{
            name: '3-0',
        }, {
            name: '3-1',
        }]
    }, {
        name: '2-1',
    }]
}, {
    name: '1-1',
}];

const _endNameArray = [];
getLevelName = (firstName, arr) => {
    arr.forEach((item) => {
        if (item.children) {
            getLevelName(firstName + ' ' + item.name, item.children);
        } else {
            _endNameArray.push(firstName + ' ' + item.name);
        }
    })
    return firstName;
}

getLevelName('', a);

console.log(_endNameArray);