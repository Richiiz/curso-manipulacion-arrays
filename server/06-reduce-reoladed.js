const items = [1, 3, 2, 3, 3, 1];

const rta = items.reduce((obj, item) => {
if (!obj[item]){
    obj[item] = 1;
}else{
    obj[item] = obj[item] + 1;
}
return obj;
}, {});

console.log(rta);

const data =[
    {name: "nicolas", level: "low"},
    {name: "Andrea", level: "medium"},
    {name: "Zulema", level: "hight"},
    {name: "Zulema", level: "medium"},
    {name: "Zulema", level: "low"},
];
const rta1 = data 
.map(item => item.level)
.reduce((obj, item) => {
    if (!obj[item]){
        obj[item] = 1;
    }else{
        obj[item] = obj[item] + 1;
    }
    return obj;
    }, {});
    console.log(rta1);





//     const numeros = [1,2,3,5,6,7,8,9,10,11,12];
// const entre = numeros.reduce((obj, item) =>{
//     if (obj[item <= 5]) obj['1-5'] += 1;
//     else if (obj[item <= 8]) obj['6-8'] += 1;
//     else obj['8-9'] += 1;
//     return obj;
// },{'1-5':0, '6-8':0, '8-9':0});
// console.log('reto', entre)




// const reto = [1,2,3,4,5,6,7,8,9];
// const retoss = reto.reduce((btw, reto)=>{
//     if(reto <= 5){
//         btw[reto <= 5] = btw['1-5']++;
//     }else if(reto <= 8){
//         btw[reto <= 8] = btw['6-8']++;
//     }else{
//         btw[reto <= 9] = btw['8-9']++;
//     }
//     return btw;
// },{
//     '1-5': 0,
//     '6-8': 0,
//     '8-9': 0
// });
// console.log('reto', retoss);





