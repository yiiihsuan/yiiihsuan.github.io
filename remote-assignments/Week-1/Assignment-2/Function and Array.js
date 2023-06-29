function maxNumber(num) {
  let max = num[0];
  for (let i = 1; i < num.length; i++) {
    if (num[i] > max) {
      max = num[i];
    }
  }
  return max;
}

function findPosition(num, target) {
  for (let i = 0; i < num.length; i++) {
    if (num[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(maxNumber([1, 2, 4, 5])); // should print 5
console.log(maxNumber([5, 2, 7, 1, 6])); // should print 7

console.log(findPosition([5, 2, 7, 1, 6], 5)); // should print 0
console.log(findPosition([5, 2, 7, 1, 6], 7)); // should print 2
console.log(findPosition([5, 2, 7, 7, 7, 1, 6], 7)); // should print 2
console.log(findPosition([5, 2, 7, 1, 6], 8)); // should print -1