const deepEqual = (a, b) => {
  const _deepEqual = (a, b) => {
    const typeof_a = typeof a;
    const typeof_b = typeof b;
    let res = true;
    if (typeof_a !== typeof_b) {
      res = false;
    } else {
      if (typeof_a === 'object') {
        Object.keys(a).forEach(key => {
          if (!_deepEqual(a[key], b[key])) {
            res = false;
          }
        });
      } else if (a !== b) {
        res = false;
      }
    }

    return res;
  };

  return _deepEqual(a, b);
};

module.exports = deepEqual;
