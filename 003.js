/**
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 */

/**
 *  bruteforced, could easily be improved with prime number rules
 */
function calcPrimeFactors(number) {
  let counter = 2;
  while (number > counter) {
    number % counter === 0 ? (number /= counter) : counter++;
  }
  return number;
}

console.log(calcPrimeFactors(600851475143));
