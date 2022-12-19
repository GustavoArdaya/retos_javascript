//Primer reto: "Dado un array de números imprimir por consola el número mayor."

let numberList = [1,4,3,8,25,10,7,2,9,6];
let highestNumber = numberList[0];

for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] > highestNumber) {
        highestNumber = numberList[i]
    } 
}
console.log(`the highest number is ${highestNumber}.`);

//Segundo reto: "Dado un array de números imprime por consola la suma de todos los que sean pares."

let numberList2 = [3,4,7,8,9,14,18,20,104, 105, 186];
let addedPairNumbers = 0;

for (let i = 0; i < numberList2.length; i++) {
    if (numberList2[i] % 2 == 0) {
        addedPairNumbers += numberList2[i];
    }   
}

console.log(`the sum of the pair numbers is ${addedPairNumbers}`);

//Tercer reto: "Dado un array de números y strings imprime un array de solamente los strings."

let mixedArray = [1, "gato", "perro", 100, 24, "coche", -35, 71, "helado", 3];
let onlyStrings = [];

for (let i = 0; i < mixedArray.length; i++) {
    if (!(mixedArray[i] < 0 || mixedArray[i] >= 0)) {
        onlyStrings.push(mixedArray[i]);
    }
}
console.log("Inside a mixed array of numbers and strings: "+ onlyStrings + " are strings");

//un metodo alternativo por sugerencia de Pere, que encontro un metodo mas directo:

let onlyStrings2 = [];

for (let i = 0; i < mixedArray.length; i++) {
    if (typeof mixedArray[i] == "string") {
        onlyStrings2.push(mixedArray[i]);
    }
    
}
console.log("(with alternative method) Inside a mixed array of numbers and strings: "+ onlyStrings2 + " are strings");
//Cuarto reto: "Dado un array de strings imprime un array de solamente los strings que empiezan por ‘a’.

let manyAnimals = ["raton","aguila", "perro", "araña", "gato", "leon", "alpaca"];
let StartsWithA =[];

for (let i = 0; i < manyAnimals.length; i++) {
    if (manyAnimals[i][0] == 'a') {
        StartsWithA.push(manyAnimals[i]);
    }  
}
console.log(`from a list of many animals ${StartsWithA} start with the letter a`);

//Quinto reto: Dado un array de strings (con palabras repetidas) imprime el numero de repeticiones de la palabra que más veces aparezca.

let repeatedWords = ["america", "europa", "africa","america" ,"asia", "oceania", "europa", "america", "asia", "america", "europa", "america" ];
let mostRepetitions = 0;






//Dado un array de objetos producto (con nombre y precio) imprime un array de los objetos que sean más caros de 10.

let products = [["botas", 40], ["pantalones", 30], ["calcetines", 7], ["jersey", 55], ["anillo", 5]];    

let expensiveProducts = [];

for (let i = 0; i < products.length; i++) {
    if (products[i][1] > 10) {
        expensiveProducts.push(products[i][0]);
    }
    
}
console.log(`El array que contiene los productos de mas de 10 euros es: ${expensiveProducts}`);

