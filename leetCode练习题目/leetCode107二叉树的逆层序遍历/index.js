const levelOrderBottom = function(root) {
  let res = [];

  if(!root) return res;

  let queues = [root];
  let amount = queues.length;
  while(amount > 0) {
    let tmp = [];
    for(let i = 0; i<amount; i++) {
      const j = queues.shift();
      tmp.push(j.val);
      if(j && j.left) queues.push(j.left);
      if(j && j.right) queues.push(j.right);
    }

    res.unshift(tmp);

    amount = queues.length;
  }

  return res;
};
