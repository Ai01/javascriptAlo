const f = (res, str, left, right) => {
  if (left === 0 && right === 0) {
    res.push(str);
    return;
  }

  if (left < right) {
    f(res, str + ')', left, right - 1);
  }

  if (left > 0) {
    f(res, str + '(', left - 1, right);
  }
};

const generateParenthesis = n => {
  if (n === 0) return [];
  const res = [];
  f(res, '', n, n);
  return res;
};

console.log(generateParenthesis(3));
