let numberList = [1,4,3,8,25,10,7,2,9,6];
let highestNumber = numberList[0];
console.log(highestNumber);
for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] > highestNumber) {
        highestNumber = numberList[i]
    } 
}
console.log(`the highest number is ${highestNumber}.`);