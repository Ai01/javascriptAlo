// 按照指定的深度创建树
const createTreeWithDefaultLevel = (originLevel, _myLevel, myNode) => {
    let _defaultNode;
    if (!myNode) {
        _defaultNode = {
            level: _myLevel,
            children: [],
        };
    } else {
        _defaultNode = myNode;
    }

    // 因为已经创建一层了,将originLevel减一,将deepLevel加一
    _myLevel += 1;

    // 如果深度不达标就递归调用
    // orginLevel - 1因为从0开始。
    if (_defaultNode.level < originLevel - 1) {
        _defaultNode.children[0] = createTreeWithDefaultLevel(originLevel, _myLevel, myNode);
    }
    // 返回最终结果
    return _defaultNode;
};

const b = createTreeWithDefaultLevel(4, 0);
console.log(b);





// 目标数据结构
// [{
// 	name: 'deepLevel${0}',
// 	children: [{
// 		name: 'deepLevel${1}',
// 		children: [{
// 			name: 'deepLevel${2}'
// 			children: ...
// 		}]
// 	}]
// }]