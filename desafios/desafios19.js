function solucion (ana, query){
    return ana.toLowerCase()
    .includes(query.toLowerCase());
}


const words1 = ("Ana lava la tina", "ana");
const words2 = ("Santiago", "tiago");
const words3 = ("Nicolas", "ana");

const nani = solucion(words1)
const nani2 = solucion(words2)
const nani3 = solucion(words3)

console.log(nani)
console.log(nani3)
console.log(nani2)


// segun esta es la solucion pero no nos esneñaron aun eso en la clase anterior
// function solution(word, query){
//     return word.toLowerCase()
//     .includes(query.toLowerCase());
// }; 