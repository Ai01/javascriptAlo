/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(!root) return [];
    if(!root.left && !root.right) return [[root.val]];

    const res = [];
    const bfs = (tree, level) => {         
        if(!Array.isArray(tree)) return;
        if(!tree.length) return;

        const nextLevel = [];       
        tree.forEach(i => {
            if(i && i.left) nextLevel.push(i.left);
            if(i && i.right) nextLevel.push(i.right);
        });

        let _res = [];
        if(level % 2 === 0) {
            for(let i = tree.length - 1; i >= 0; i--) {
                _res.push(tree[i].val);
            }
        } else {
            for(let i = 0; i < tree.length; i++) {
                _res.push(tree[i].val);
            }
        }

        if(_res.length) res.push(_res);
        if(nextLevel.length) bfs(nextLevel, level + 1);
    }

    bfs([root], 1);

    return res;
};