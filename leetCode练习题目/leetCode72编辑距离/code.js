// 利用递归的方法实现，问题是算法复杂度过高
const edit_distance = (a, b, i, j) => {
  console.log('a:', a, 'b:', b, i, j);
  if (j === 0) {
    return i;
  }

  if (i === 0) {
    return j;
  }

  if (a[i - 1] === b[j - 1]) {
    return edit_distance(a, b, i - 1, j - 1);
  }

  return Math.min(
    edit_distance(a, b, i - 1, j) + 1,
    edit_distance(a, b, i, j - 1) + 1,
    edit_distance(a, b, i - 1, j - 1) + 1,
  );
};

const minDistance1 = function(word1, word2) {
  if (word1.length === 0) return word2.length;
  if (word2.length === 0) return word1.length;
  return edit_distance(word1, word2, word1.length, word2.length);
};

console.log(minDistance1('dinitrophenylhydrazine', 'benzalphenylhydrazone'));

// 动态规划实现
const minDistance2 = (a, b) => {
  const lena = a.length;
  const lenb = b.length;

  const d = [];
  for (let i = 0; i < lena + 1; i++) {
    d.push([]);
  }

  for (let i = 0; i <= lena; i++) {
    d[i][0] = i;
  }
  for (let j = 0; j <= lenb; j++) {
    d[0][j] = j;
  }

  for (let i = 1; i <= lena; i++) {
    for (let j = 1; j <= lenb; j++) {
      if (a[i - 1] === b[j - 1]) {
        d[i][j] = d[i - 1][j - 1];
      } else {
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + 1);
      }
    }
  }

  return d[lena][lenb];
};

// console.log(minDistance2('dinitrophenylhydrazine', 'benzalphenylhydrazone'));
