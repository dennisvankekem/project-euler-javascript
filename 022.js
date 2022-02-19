//Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

//For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.

//What is the total of all the name scores in the file?
const fs = require("fs");

function readDataFromText() {
  return fs.readFileSync("./extra/names.txt", "utf8", err => {
    if (err) {
      //console.log(err);
      return err.message;
    }
  });
}

// use (charCodeAt - 96) to create alphabet score without hardcoding values
function createNameScore(name, index) {
  let sumName = 0;
  for (let i = 1; i < name.length - 1; i++) {
    sumName += name.charCodeAt(i) - 96;
  }

  return sumName * index;
}

function getTotalLetterScore() {
  // get and sort array
  let data = readDataFromText();
  let dataToArr = data.split(",");
  dataToArr.sort();

  let total = 0;
  dataToArr.forEach((name, index) => {
    let nameScore = createNameScore(name.toLowerCase(), index + 1);
    total += nameScore;
  });

  return total;
}

console.log(getTotalLetterScore());
