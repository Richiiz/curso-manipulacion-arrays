function oracion(palabra){
    return lineas = palabra.flatMap(word => word.split(' ')).length;
}

 const solution = ([
    "Beautiful is better than ugly",
    "Explicit is better than implicit",
    "Simple is better than complex",
    "Complex is better than complicated",
  ]);

const plbT = oracion(solution);

console.log (plbT);