var arr = [
    {id:1, pid:0, name:"SYSTEM"},
    {id:2, pid:1, name:"aa"},
    {id:3, pid:2, name:"aaa"},
    {id:4, pid:2, name:"b"},
    {id:5, pid:0, name:"c"},
    {id:6, pid:5, name:"cc"}
];

function generateTree(arr) {
    var root = {name:null};
    if (arr.length > 0) {
        var objMap = {};
        root["children"] = [];
        arr.forEach(function(item){
            var node = {
		    name: item.name,
		    pid: item.pid,
		    id: item.id,
	    };
            objMap[item.id] = node;
            if(item.pid === 0) {
                root["children"].push(node);
            } else {
                var parent = objMap[item.pid];
                if (parent["children"]) {
                    parent["children"].push(node);
                } else {
                    parent["children"] = [];
                    parent["children"].push(node);
                }
            }
        });
    }
    return [root];
}

var json = JSON.stringify(generateTree(arr), null, 2);

console.log(json);

