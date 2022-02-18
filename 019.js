// You are given the following information, but you may prefer to do some research for yourself.

// - 1 Jan 1900 was a Monday.
// - Thirty days has September,
//   April, June and November.
//   All the rest have thirty-one,
//   Saving February alone,
//   Which has twenty-eight, rain or shine.
//   And on leap years, twenty-nine.
// - A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.

// How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

//starting date is jan 1 1900
function countSundaysOnFirst(fromYear, toYear) {
    let year = 1900
    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    let sundayNightFevers = 0
    let totalDays = 0 

    while(year <= toYear){
        //check for leapyears
        year % 4 === 0 ? months[1] = 29 : months[1] = 28
        //restore if it is a leapyear exception 
        year % 100 === 0 && year % 400 !== 0 ? months[1] = 28 : null

        //go over month and sum days
        months.forEach((month) => {
            totalDays += month
    
            if(totalDays % 7 === 6 && year >= fromYear){
                sundayNightFevers++
            }
        })
        year++

    }

    return sundayNightFevers
}

console.log(countSundaysOnFirst(1901, 2000))