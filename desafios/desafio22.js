function url(title){
    return title.split(' ').join('-').toLowerCase();
}

const text1 =("La forma de correr Python");
const text2 = ("La API para nunca parar de aprender");
const text3 = ("Curso de arrays");

const url1 = url(text1)
const url2 = url(text2)
const url3 = url(text3)

console.log(url1);
console.log(url2);
console.log(url3);
