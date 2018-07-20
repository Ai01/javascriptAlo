const edit_distance = (a, b) => {
  const lena = a.length;
  const lenb = b.length;

  const d = [];
  for(let i = 0; i< lena + 1; i++) {
    d.push([]);
  }

  for (let i = 0; i <= lena; i++) {
    d[i][0] = i;
  }
  for (let j = 0; j <= lenb; j++) {
    d[0][j] = j;
  }

  for(let i = 1; i <= lena; i++){
    for(let j = 1; j <= lenb; j++) {
      if(a[i-1] === b[j-1]) {
        d[i][j] = d[i-1][j-1];
      } else {
        d[i][j] = Math.min(d[i-1][j] + 1, d[i][j-1] + 1, d[i-1][j-1] + 1);
      }
    }
  }

  console.log(d);

  return d[lena][lenb];
};

console.log(edit_distance('fgx', 'fxg'));
