/**
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 * What is the 10 001st prime number?
 */

/** works, but i am not happy with it  */
function calculatePrimeNumbers(limit) {
  let primeArray = [2, 3];
  let i = 3;
  while (primeArray.length <= limit) {
    if (
      i % 2 === 0 ||
      primeArray.includes(i) ||
      primeArray.filter(number => i % number === 0).length > 0
    ) {
      i++;
    } else {
      primeArray.push(i);
      i++;
    }
  }
  return primeArray[limit - 1];
}

console.log(calculatePrimeNumbers(10001));
