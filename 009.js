/**
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
 * a2 + b2 = c2
 * For example, 32 + 42 = 9 + 16 = 25 = 52.
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.
 */

function findPythagoreanTriplet(limit) {
  let a = 0;
  let b = 0;
  let c = 0;
  let gotcha = 0;

  for (let i = 1; i < limit; i++) {
    for (let j = 1; j < limit; j++) {
      let powedNumber = Math.pow(i, 2) + Math.pow(j, 2);
      if (powedNumber > 0 && Math.sqrt(powedNumber) % 1 === 0) {
        a = i;
        b = j;
        c = Math.sqrt(powedNumber);
        if (a + b + c === limit) {
          gotcha = a * b * c;
        }
      }
    }
  }

  let formattedString =
    'a: ' + a + ' b: ' + b + ' = c: ' + c + ' gotcha: ' + gotcha;

  return formattedString;
}

console.log(findPythagoreanTriplet(1000));
