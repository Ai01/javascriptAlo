// 二叉树的插入
// 递归前序遍历，中序遍历，中序遍历
function BinarySearchTree() {
    var Node = function(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    };

    var root = null;

    var insertNode = function(node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode; //遇到空值就插入
            } else {
                insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode; //遇到空值就插入
            } else {
                insertNode(node.right, newNode);
            }
        }
    };

    // 插入方法
    this.insert = function (key) {
    	var newNode = new Node(key);

    	if(root === null){
    		root = newNode; //遇到空值就插入
    	}else{
    		insertNode(root, newNode);
    	}
    }

    // 中序遍历
    var inOrderTraverseNode = function(node, callback){
    	if(node !== null){
    		inOrderTraverseNode(node.left, callback);
    		callback(node.key);
    		inOrderTraverseNode(node.right,callback);
    	}
    };
    this.inOrderTraverse = function(callback){
    	inOrderTraverseNode(root,callback);
    }

    //先序遍历
    var preOrderTraverseNode = function(node, callback){
    	if(node !== null){
    		callback(node.key);
    		preOrderTraverseNode(node.left, callback);
    		preOrderTraverseNode(node.right, callback);
    	}
    }
    this.preOrderTraverse = function(callback){
    	preOrderTraverseNode(root, callback);
    }

    // 后序遍历
    var postOrderTraverseNode =  function(node,callback){
    	if(node!==null){
    		postOrderTraverseNode(node.left, callback);
    		postOrderTraverseNode(node.right, callback);
    		callback(node.key);
    	}
    }
    this.postOrderTraverse = function(callback){
    	postOrderTraverseNode(root, callback);
    }

    // value方法，用来获得值
    this.values = function(traverseFuc){
    	var keyList = [];
    	this[traverseFuc](function(key){
    		keyList.push(key);
    	})
    	return keyList;
    }
}

//测试
var binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(11);
binarySearchTree.insert(7);
binarySearchTree.insert(13);
binarySearchTree.insert(5);
binarySearchTree.insert(3);
binarySearchTree.insert(9);

var _inOrderValue = binarySearchTree.values('inOrderTraverse');
var _preOrderValue = binarySearchTree.values('preOrderTraverse');
var _postOrderValue = binarySearchTree.values('postOrderTraverse')

console.log(_inOrderValue);
console.log(_preOrderValue);
console.log(_postOrderValue);