const twoSum = function(numbers, target) {
  for (let i = 0, j = numbers.length - 1; i < j; ) {
    while (numbers[i] + numbers[j] < target) ++i;
    while (numbers[i] + numbers[j] > target) --j;

    if (numbers[i] + numbers[j] === target) return [i + 1, j + 1];
  }
};

const numbers = [3, 24, 50, 79, 88, 150, 345];
const target = 200;

console.log(twoSum(numbers, target));
