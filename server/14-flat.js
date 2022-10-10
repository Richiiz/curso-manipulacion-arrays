const matriz = [
    [1,2,3],
    [4,5,6,[7,2,[1,9]]],
    [7,8,9]
];

/*.flat lo que hace es juntar todos los array que este dentro de un array y mostrarlos en uno solo,
tenemos qe ponerle cuandos niveles hay para que "aplane" todo en uno solo.*/

const rta = matriz.flat(2)
console.log('rta', rta)