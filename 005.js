/**
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */

function evenlyDivisibleByAll(limit) {
  let counter = 1;
  let number = 1;
  while (counter !== limit) {
    if (number % counter === 0) {
      counter++;
    } else {
      number++;
      counter = 1;
    }
  }
  return number;
}

console.log(evenlyDivisibleByAll(20));
