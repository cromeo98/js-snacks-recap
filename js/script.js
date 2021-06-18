// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

//1) creo l'array 
const myArray = ['a', 1, 'b', 2, 'c', 3, 'd', 4];

//3) richiamo la funzione
console.log(returnNewArr(myArray, 3, 6));


// //*********** Functions */
//2a) scrivo la funzione che può contenere i tre argomenti (FOREACH)
// function returnNewArr(arr, min, max){
//     const newArray = [];
//     arr.forEach((element, index, arr) => {
//         if(index >= min && index <= max){
//             newArray.push(element); //arr[index]
//         }
//     });
//     return newArray;
// }

//2b) scrivo la funzione che può contenere i tre argomenti (FILTER)
function returnNewArr(arr, min, max){
    const newArray = arr.filter((element, index) =>{
    return index >= min && index <= max;
    }); // or const newArray = arr.filter((element, index) => index >= min && index <= max);
    return newArray;
}
