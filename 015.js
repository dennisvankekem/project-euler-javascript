// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
// How many such routes are there through a 20×20 grid?

//runtime 0.04 sec btw
function findLatticePath(limit) {
    let startArray = [1, 1]
    let nextArray = []
    for(let j = 1; j < limit + limit ; j++){
        for(let i = 0; i < startArray.length - 1; i++){
            nextArray.push(startArray[i] + startArray[i + 1])
        }
        if(j < limit){
            nextArray.push(1)
            nextArray.unshift(1)
        }
        startArray = nextArray
        nextArray = []
    }

    return (startArray[0])

}

console.log(findLatticePath(20))