const isUgly = function(num) {
  if(num === 1) return true;
  if(num === 0) return false;

  const stand = [2, 3, 5];

  if(stand.indexOf(num) !== -1) return true;

  if(num % 2 === 0) {
    return isUgly(num/2);
  }
  if(num % 3 === 0) {
    return isUgly(num/3);
  }
  if(num % 5 === 0) {
    return isUgly(num/5);
  }

  return false;
};

// isUgly(0);

const isUgly2 = (num) => {
  if(num === 0) return false;
  if(num === 1) return true;

  while(num % 2 === 0) num /= 2;
  while(num % 3 === 0) num /= 3;
  while(num % 5 === 0) num /= 5;

  return num === 1;
}

// isUgly2(6);
