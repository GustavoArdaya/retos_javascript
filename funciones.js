//Cuarto reto: "Dado un array de strings imprime un array de solamente los strings que empiezan por ‘a’.
// hacerlo funcion!

const manyAnimals = ["raton","aguila", "perro", "araña", "gato", "leon", "alpaca"];

console.log(manyAnimals[0][0]);
function selectOnlyStringWithA(stringList) {
   let startsWithA = [];
    stringList.forEach(element => {
        if (element.toLowerCase()[0] == "a") {
        startsWithA.push(element);   
        }
    });
    return startsWithA;
}

console.log(selectOnlyStringWithA(manyAnimals));

//let animalsThatStartwithA = [];

function normal(params) {
    return 1;
} 

let normalFlecha = params => {
    return 1;
}