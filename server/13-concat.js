const elements = [1,1,2,2,];
const otroselements = [3,3,4,4,];


//junta dos arrays en uno solo,
const rta = elements.concat(otroselements);

//hay que ser mas cuidadoso con el sprit operation ya que solo lo hara de manera adecuada con un array 
//ya de por ejemplo, con strings separara cada elemento.

const rta2 = [...elements, ...otroselements];
console.log('for', rta);

elements.push(...otroselements);
console.log('elements', elements);