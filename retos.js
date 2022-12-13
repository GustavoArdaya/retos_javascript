//Primer reto "Dado un array de números imprimir por consola el número mayor."

let numberList = [1,4,3,8,25,10,7,2,9,6];
let highestNumber = numberList[0];

for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] > highestNumber) {
        highestNumber = numberList[i]
    } 
}
console.log(`the highest number is ${highestNumber}.`);

//Segundo reto "Dado un array de números imprime por consola la suma de todos los que sean pares."

let numberList2 = [3,4,7,8,9,14,18,20,104, 105, 186];
let addedPairNumbers = 0;

for (let i = 0; i < numberList2.length; i++) {
    if (numberList2[i] % 2 == 0) {
        addedPairNumbers += numberList2[i];
        console.log
    }   
}

console.log(`the sum of the pair numbers is ${addedPairNumbers}`);