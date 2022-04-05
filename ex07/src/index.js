// Only change code below this line

function randomRangeNumber(minNumber, maxNumber) {

   return  Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    
}
randomRangeNumber(10, 20);
// Only change code above this line
console.log(randomRangeNumber(10, 20));
module.exports = randomRangeNumber;