/**
 * The sum of the squares of the first ten natural numbers is,
 * Math.pow(1, 2)+ Math.pow(2, 2) +....+ Math.pow(10, 2) = 385
 * The square of the sum of the first ten natural numbers is,
 * Math.pow(1 + 2 +....+ 10, 2) = Math.pow(55, 2) = 3025
 * Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is .
 * 3025 - 285 = 2640
 * Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum
 */

function sumOfSquares(limit) {
  let sum = 0;
  for (let i = 1; i <= limit; i++) {
    sum += Math.pow(i, 2);
  }
  return sum;
}

function squareOfSums(limit) {
  let sum = 0;
  for (let i = 1; i <= limit; i++) {
    sum += i;
  }
  sum = Math.pow(sum, 2);
  return sum;
}

//inefficient!!!!!! apperently there are formula's for this
function findDifferenceSquarednumbers(limit) {
  let sumOSquares = sumOfSquares(limit);
  let squareOSums = squareOfSums(limit);
  return squareOSums - sumOSquares;
}

console.log(findDifferenceSquarednumbers(100));
