//  MÉTODO INCLUDES EN ES7 QUE ES LA VERSIÓN DEL AÑO 2016 EN JUNIO
let numbers = [1,2,3,4,5,6,7,8,10,14];

if (numbers.includes(7)) {
    console.log('Si se encuentra el valor 7');    
} else {
    console.log('No se encuentra');
}



let phrase = 'El gato negro corre por la verde pradera';


if (phrase.includes("corre por la")) {
    console.log('Si se encuentra');
} else {
    console.log('No se encuentra');
}



//NUEVA FORMA DE ELEVAR A UNA POTENCIA
let base = 3;
let exponent = 4;
let result = base ** exponent;

console.log(result);