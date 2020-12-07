/**
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 * Find the sum of all the primes below two million.
 */

// orginally copied from 007 but too slow, attempting a sieve
function sumOfPrimes(limit) {
  // new answer
  let primeArray = [];
  let arr = Array.from({ length: limit - 1 }, (x, i) => i + 2);

  //remove non prime numbers with prime in array cant be bigger than sqrt(n)
  // broke for numbers < 10 because missing check for [2,3,5], will not fix for now
  while (arr[0] < Math.floor(Math.sqrt(limit, 2))) {
    let shiftedNumber = arr[0];
    primeArray.push(shiftedNumber);
    arr = arr.filter(number => number % shiftedNumber !== 0);
  }
  let sum = primeArray.reduce((a, b) => a + b, 0);
  let restSum = arr.reduce((a, b) => a + b, 0);
  return sum + restSum;

  // old answer

  //   let primeArray = [2, 3];
  //   let sum = 5;
  //   let i = 3;
  //   while (i <= limit) {
  //     if (
  //       i % 2 === 0 ||
  //       primeArray.includes(i) ||
  //       primeArray.filter(number => i % number === 0).length > 0
  //     ) {
  //       i++;
  //     } else {
  //       sum += i;
  //       primeArray.push(i);
  //       i++;
  //     }
  //   }
  //   return sum;
}

console.log(sumOfPrimes(2000000));
