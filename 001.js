/**
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

function sumOfMultiples(multipleX, multipleY, calcNumber) {
  let totalSum = 0;
  for (let i = 0; i < calcNumber; i++) {
    if (i % multipleX === 0 || i % multipleY === 0) {
      totalSum += i;
    }
  }
  return totalSum;
}

console.log(sumOfMultiples(3, 5, 1000));
