const levelOrder = function(root) {
  const res = [];

  if(!root) return res;

  const queues = [root];
  let amount = queues.length;

  while(amount>0) {
    let tmp = [];

    for(let i = 0; i < amount; i++) {
      let j = queues.shift();
      tmp.push(j.val);
      if(j.left) queues.push(j.left);
      if(j.right) queues.push(j.right);
    }

    res.push(tmp);
    amount = queues.length;
  };

  return res;
};
