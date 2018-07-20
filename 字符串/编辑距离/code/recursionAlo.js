// 利用递归的方法实现，问题是算法复杂度过高

const min_of_three = (a,b,c) => {
  return Math.min(a,b,c);
}

const edit_distance = (a, b, i, j) => {
  if(j === 0) {
    return i;
  }

  if(i === 0) {
    return j;
  }

  if(a[i-1] === b[j-1]) {
    return edit_distance(a, b, i-1, j-1);
  }

  return min_of_three(edit_distance(a,b,i-1,j) + 1, edit_distance(a,b,i,j-1) + 1, edit_distance(a,b,i-1,j-1) + 1);
};

console.log(edit_distance('fgx', 'fxg', 3, 3));
