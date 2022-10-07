function solucion(numbers) {
    return numbers.every(item => item % 2 === 0);
}; 

const solution1 = [2, 4, 6, 8, 10];
const solution2 = [1, 3, 5, 7, 10, 11];
const solution3 = [1, 3, 5];

const solucion1 = solucion(solution1)
const solucion2 = solucion(solution2)
const solucion3 = solucion(solution3)

console.log(solucion1);
console.log(solucion2);
console.log(solucion3);