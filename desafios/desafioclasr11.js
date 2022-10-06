const numeros = [1,2,2,5,6,7,8,9];
const solu = numeros.reduce((obj, numero) => {
    if(numero >=1 && numero <=5){
        obj[numeros <= 5] = obj['1-5']++;
        }else if(numero >=6 && numero <= 8){
        obj[numeros <=8] = obj['6-8']++;
            }else{
                obj[numeros <=10] = obj['9-10']++;
            }
            return obj;
            
 },{'1-5':0,
    '6-8':0,
    '9-10':0
});
console.log(solu);
