/**
 * A palindromic number reads the same both ways.
 * The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

function findPalindromicNumber(digitX, digitY) {
  let biggestPalindrome = 0;
  for (let i = 0; i <= digitX; i++) {
    for (let j = 0; j <= digitY; j++) {
      let sum = i * j;
      let sumReverse = String(sum).split('').reverse().join('');
      if (sum == sumReverse && sum > biggestPalindrome) {
        biggestPalindrome = sum;
      }
    }
  }
  return biggestPalindrome;
}

console.log(findPalindromicNumber(999, 999));
