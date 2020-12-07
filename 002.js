/**
 * Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
 * 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 * By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
 */

function calcFibonacci(limit) {
  let totalSumOfEvenNumbers = 0;
  let currentNumber = 1;
  let transitNumber = 1;
  let previousNumber = 1;
  while (currentNumber < limit) {
    currentNumber % 2 === 0 && (totalSumOfEvenNumbers += currentNumber);
    transitNumber = currentNumber;
    currentNumber += previousNumber;
    previousNumber = transitNumber;
  }
  return totalSumOfEvenNumbers;
}

console.log(calcFibonacci(4000000));
