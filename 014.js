// The following iterative sequence is defined for the set of positive integers:

// n → n/2 (n is even)
// n → 3n + 1 (n is odd)

// Using the rule above and starting with 13, we generate the following sequence:

// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

// Which starting number, under one million, produces the longest chain?

// NOTE: Once the chain starts the terms are allowed to go above one million.


//bruteforce
//would be more efficient by storing the calculated chains and add higher numbers 
function findLargestCollatzChain(limit) {
    let biggestNumber = 0
    let biggestStorm= 0
    for(let i = 2; i <= limit; i++){
        let sequenceNumber = i
        let stormCounter= 0;
        while(sequenceNumber > 1){
            if(sequenceNumber % 2 === 0){
                sequenceNumber /= 2 
            } else {
                sequenceNumber = (sequenceNumber * 3) + 1
            }
            stormCounter++
        }
        if(stormCounter > biggestStorm){
            biggestStorm = stormCounter
            biggestNumber = i
        }
    }

    return biggestNumber
}

console.log(findLargestCollatzChain(1000000))