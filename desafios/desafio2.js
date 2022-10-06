const solution = [
    {name: 'Nicolas', lastName: 'Molina', age: 28},
    {name: 'Valentina', lastName: 'Molina', age: 19},
  ];
function solucion ({name}){
        return `${name}`;
    };
const nombre = solution.map(solucion);
console.log (nombre);