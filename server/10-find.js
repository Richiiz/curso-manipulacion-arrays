const numbers = [1, 30, 49, 20, 10, 13];

//muestra el primer elemento que coincida con la comparacion

const rt2 = numbers.find(item => item === 30)
console.log('find',rt2)


const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];

  const rt3 = products.find(item => item.id === '🥞')
console.log('find',rt3);

const rt4 = products.findIndex(item => item.id === '🥞')
console.log('find index',rt4);