// If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?

// NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. 
// The use of "and" when writing out numbers is in compliance with British usage.

function NumberPointValueHelper(i) {
    let value = 0;

    if(i == 1 || i === 2 || i === 6 || i === 10) { value += 3 }
    if(i === 4 || i === 5 || i === 9 ) { value += 4 }
    if(i === 3 || i === 7 || i === 8 || i === 40 || i === 50 || i === 60) { value += 5 }
    if(i === 11 || i === 12 || i === 20 || i === 30 || i === 80 || i === 90) { value += 6 }
    if(i === 15 || i === 16 || i === 70) { value += 7 }
    if(i === 13 || i === 14 || i === 18 || i === 19) { value += 8 }
    if(i === 17) { value += 9 }

    return value
}

// limit 1000 
function NumberToWordCount(limit) {
    let sum = 0;
    for(let i = 1; i <= limit; i++){
        let numString = i.toString()

        if(i > 99 && i < 1000) {
            // there is always 'and' and 'hundred'
            sum += 7
            sum += NumberPointValueHelper(parseInt(numString.charAt(0)))
            let other = numString.charAt(1) + numString.charAt(2)
            if(parseInt(other) > 20 && parseInt(other) < 100 && numString.charAt(2) !== 0) {
                sum += NumberPointValueHelper(parseInt(numString.charAt(1) + 0))
                sum += NumberPointValueHelper(parseInt(numString.charAt(2)))
            } else {
                sum += NumberPointValueHelper(parseInt(other))
            }
            if(parseInt(numString.charAt(1)) + parseInt(numString.charAt(2)) !== 0){
                sum += 3
            }
        }
        // kind of copy paste from above :(
        else if(i > 20 && i < 100 && numString.charAt(1) !== 0) {
            sum += NumberPointValueHelper(parseInt(numString.charAt(0) + 0))
            sum += NumberPointValueHelper(parseInt(numString.charAt(1)))
        } else {
            sum += NumberPointValueHelper(i)
        }


        if(i === 1000){
            // yeey?
            sum += 11
        }
    }
    return sum
}

console.log(NumberToWordCount(1000))