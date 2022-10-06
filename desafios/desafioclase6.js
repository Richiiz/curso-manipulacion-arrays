function solution (porcentaje){
  return porcentaje.map((item, indice) => ({... item, taxes: Math.trunc(item.price * .19)}))
}
const almacen = [
    {name: 'Nicolas', price: 1000, stock: 10},
    {name: 'Valentina', price: 5000, stock: 40},
    {name: 'huevos', price: 2360, stock: 21}
  ];
const solucion = solution(almacen);
console.log('porcentaje de los precios', solucion);