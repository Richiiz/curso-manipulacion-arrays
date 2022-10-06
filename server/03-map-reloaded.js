const orders = [
    {customerName: 'nicol', total: 60, delivered: true},
    {customerName: 'zulema', total: 120, delivered: false},
    {customerName: 'juan', total: 180, delivered: true}
]
const rta= orders.map(item => item.total)
console.log('rta', rta);

/*const rta2= orders.map(item => {
    item.tax = .19;
    return item;
})
console.log('rta2', rta2);
//la siguiente linea trae el tax del rta2, esto no quiere decir que haya mutado, si no que trae
//una referencia de memoria y eso es lo que trae como nuevo array
//cuando retornamos un mismo objetos traemos la referencia de memoria aunque haya cambiado antes de un nuevo array.
console.log ('original', orders);*/

const rta3= orders.map(item => {
    return {
        //utilizando 3 puntos copiamos un objetos in la referencia de memoria
        ...item,
        tax: .19
    }
})
//mutado sin memoria
console.log ('sin memoria', rta3)
//sin cambios porque solo se copia el objeto, no se toma la referencia
console.log('original', orders)