const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

const productindex = products.findIndex(item => item.id ==='🍔');
if (productindex !== -1){
    //push muta el array original agregandole un nuevo elemento.
    myProducts.push(products[productindex]);
    products.splice(productindex, 1);
    //.splice, esta quitando un elemento del array, es decir, es mutable.
}

console.log("products", products);
console.log("MyProducts", myProducts);
console.log("-".repeat(10));

//nuevo array para no trabajar con el anterior.
const productsV2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const update ={
    id:'🥞',
    changes:{
    price: 100,
    description: ' cremoso',
    }
}
const productindexV2 = productsV2.findIndex(item => item.id === update.id);
productsV2[productindexV2] = {
    ...productsV2[productindexV2],
    ...update.changes,
};
console.log(productsV2);


//ejercicio de generar un nuevo array sin cambiar el anterior
const productsV3 = productsV2.map(item => {
    if(item.id === update.id){
        return{
            ...item,
            ...update.changes
        }
    }else{
        return{
            ...item
        }
    }
});
        
console.log('array sin cambios',productsV3)





const soriana = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const elements = soriana.splice(2,2,"")
console.log('ejercicio borrar', elements)
console.log(soriana)