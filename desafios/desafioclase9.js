function solution (palabras){
    return palabras.filter(item => item.length >= 4);
}
const palabras = ['amor','sol','piedra','dia']
const solucion = solution(palabras);
console.log('filtro', solucion);