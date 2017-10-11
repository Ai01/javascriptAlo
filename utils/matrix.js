var matrix = function (numrows, numcols, initial) {
  var arr = [];
  for (let i = 0; i < numrows; ++i) {
    var columns = [];
    for (let j = 0; j < numcols; ++j) {
      columns[j] = initial;
    }
    arr[i] = columns;
  }
  return arr;
}


module.exports.matrix = matrix
