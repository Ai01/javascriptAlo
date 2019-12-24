// 递归的计算
var hasPathSum = function(root, sum) {
    let res = false;

    const scanner = (root, _sum) => {
        if(!root) return;

        _sum += root.val;
        if(!root.left && !root.right && _sum === sum) {
            res = true;
            return;
        };

        scanner(root.left, _sum);
        scanner(root.right, _sum);
    }
    scanner(root, 0);

    return res;
};