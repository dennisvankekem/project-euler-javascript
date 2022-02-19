//Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
//If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

//For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

//Evaluate the sum of all the amicable numbers under 10000.

function findProperDivisorsSum(n) {
  let count = 2;
  let sumArr = [1];
  let smallestDivisor = 1;

  while (smallestDivisor !== 1) {
    if (n % count == 0) {
      smallestDivisor = count;
      sumArr.push(count);
    }
    count++;
  }

  while (count < n / smallestDivisor) {
    if (n % count == 0) {
      sumArr.push(count);
    }
    count++;
  }
  let sum = 0;
  sumArr.forEach(number => {
    sum += number;
  });
  return sum;
}

function sumOfAmicableNumbers(limit) {
  let total = 0;
  let arr = [];
  for (let i = 0; i <= limit; i++) {
    let sum = findProperDivisorsSum(i);
    let sumDivisorSum = findProperDivisorsSum(sum);
    if (sumDivisorSum === i && !arr.includes(sum) && sum !== sumDivisorSum) {
      arr.push(i, sum);
    }
  }

  arr.forEach(number => (total += number));

  return total;
}

console.log(sumOfAmicableNumbers(100000));
