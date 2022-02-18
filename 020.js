// n! means n × (n − 1) × ... × 3 × 2 × 1

// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
// and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

// Find the sum of the digits in the number 100!

function calcFactiorialDigit(num) {
  // calculate factorial with big int
  let sum = BigInt(1);
  while (num != 1) {
    sum *= BigInt(num);
    num--;
  }

  // cast bigint to string and iterate to sum numbers
  let sumToString = sum.toString();
  let sumOfAnswer = 0;

  for (let i = 0; i < sumToString.length; i++) {
    sumOfAnswer += parseInt(sumToString[i]);
  }

  return sumOfAnswer;
}

console.log(calcFactiorialDigit(100));
