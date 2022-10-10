function solution(numbers) {
	return numbers.some(item => item % 2 === 0);
};

const numbers = [1, 3, 5, 7, 10, 11];
const numbers2 = [1, 3, 5]
const solucion = solution(numbers)
const solucion2 = solution(numbers2)

console.log(solucion);
console.log(solucion2);