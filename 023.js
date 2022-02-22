//A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

//A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

//As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24.

//By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers.

//However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

//Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.

//copy from solution 021 , exectime - 1.27s <- should be improved
function findProperDivisorsSum(n) {
  let count = 2;
  let sumArr = [1];
  let smallestDivisor = 1;
  let total = 0;

  while (smallestDivisor !== 1) {
    if (n % count == 0) {
      smallestDivisor = count;
      sumArr.push(count);
    }
    count++;
  }

  while (count < n / smallestDivisor) {
    if (total > n) {
      break;
    }
    if (n % count == 0) {
      total += count;
      sumArr.push(count);
    }
    count++;
  }
  let sum = 0;
  sumArr.forEach(number => {
    sum += number;
  });
  return sum <= n ? true : false;
}

// loop through numbers 1 to 28123 and sum all numbers for total count.
// furthermore, check if a number is abundant and if so,
// add number to array of already found abundant numbers.
// subract total from abundant and get the end result
function findAllNonAbundantNumers(limit) {
  let arrOfAbundantNumbers = [];
  let nonCleanIntegers = {};
  let sumOfAllNumbers = 0;

  for (let i = 1; i <= limit; i++) {
    sumOfAllNumbers += i;
    if (!findProperDivisorsSum(i)) {
      arrOfAbundantNumbers.push(i);
      for (let j = 0; j <= arrOfAbundantNumbers.length - 1; j++) {
        if (arrOfAbundantNumbers[j] + i > limit) {
          break;
        }
        nonCleanIntegers[arrOfAbundantNumbers[j] + i] = true;
      }
    }
  }

  let totalSum = 0;

  Object.keys(nonCleanIntegers).forEach(number => {
    totalSum += parseInt(number);
  });

  return sumOfAllNumbers - totalSum;
}

console.log(findAllNonAbundantNumers(28123));
