const words = ['spray', 'limit', 'elite', 'exuberant'];

const newArray = [];
for (let index = 0; index < words.length; index++){
    const item = words[index];
    if (item.length >= 6){
        newArray.push(item);
    }
}

console.log('newArray', newArray);
console.log('original', words);


// ahora con filter, este lo que hace es mostrar en un nuevo array los objetos que cumplan con una condicion
const rta = words.filter(item => item.length >= 6)
console.log('rta', rta);
console.log('original', words);


const orders = [
    {customerName: 'nicol', total: 60, delivered: true},
    {customerName: 'zulema', total: 120, delivered: false},
    {customerName: 'juan', total: 180, delivered: true},
    {customerName: 'pepe', total: 200, delivered: false},
    {customerName: 'pepito', total: 200, delivered: false}
]
const rt3 = orders.filter(item => item.delivered && item.total >=100);
console.log('rt3', rt3);

const search = (query) => {
    return orders.filter(item =>{
        return item.customerName.includes(query);
    })
}
console.log('buscador', search('i'));