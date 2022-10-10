const letters = ['a','b','c'];
//esta linea de codigo hace lo mismo que lo que esta comentado mas abajo, lo que hace "map" transforma
//.map() es INMUTABLE por lo que no modifica el array original, solo crea uno muevo con los elementos transformados
const newArray = letters.map(item => item.length);

/*const newArray = [];
for( let index =0; index < letters.length; index++){
    const element = letters[index];
    newArray.push(element + '++');
}
*/
console.log('original', letters);
console.log('new', newArray);