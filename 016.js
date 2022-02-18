// 2pow(15) = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

// What is the sum of the digits of the number 2pow(1000)?

//BIGINT!!
function sumOfPowDigits(power) {
    let number = BigInt(Math.pow(2, power))
    let numberToString = String(number)
    let sum  = 0;
    for(let i = 0; i < numberToString.length; i++){
        if(numberToString[i] !== 'n'){
            sum += parseInt(numberToString[i])
        }

    }
    return sum
}

console.log(sumOfPowDigits(1000))