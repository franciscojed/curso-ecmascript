function newFunction(name, age, country) {
    var name = name || 'Oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

//es6
function newFunction2(name='Oscar', age=32, country='MX') {
    console.log(name, age, country);
}

newFunction2();
newFunction2('Ricardo', 23, 'COL');



let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

//es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase);



let lorem = "Doloren ipsu bla bla bla y esta seria la primera línea \n" +
"esta seria la segunda línea de este string con el método viejito";
console.log(lorem);


//es6
let lorem2 = `primera líne de este parrafito pequeño con el método es6 
ahora ya estamos en la segunda línea entonces veremos como queda`;
console.log(lorem2);

//DESESTRUCTURACIÓN DE ELEMENTOS
let person = {
    'name1': 'Oscar',
    'age': 32,
    'country': 'MX',
};
console.log(person.name1, person.age);

//es6 una forma más amigable
let {name1, age, country} = person;
console.log(name1, age, country);


//OPERADOR DE PROPAGACIÓN   
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];
let education = ['David', ...team1, ...team2]; //es6

console.log(education);


//DIFERENCIA ENTRE VAR Y LET A CAUSA DEL SCOPE
{
    var globalVar = "Global Var";
}

{
    let globalLet = "Global Let"; //let es de es6
    console.log(globalLet); //CORRECTO porque usamos let dentro de su scope
}
console.log(globalVar);
//console.log(globalLet); ERROR



//PROPIEDADES DE OBJETO MEJORADA

let nameA = 'Oscar';
let ageA = 32;

let obj = {nameA: nameA, ageA: ageA}; //ES5
let obj2 = {nameA, ageA};  //ES6
console.log(obj2);


//ARROW FUNCTIONS

let names = [
    {nameB: 'Oscar', ageB: 32},
    {nameB: 'Yesica', ageB: 27}
];

let listOfNames = names.map(function(item) {
        console.log(item.nameB);
});


let listOfNames2 = names.map(item=>console.log(item.nameB));


const listOfNames3 = (nameC, ageC, countryC) => {
    //bloque de código
};

const listOfNames4 = nameC => {
    //bloque de código
};

const square = num => num * num;


//PROMISE  O SEA PROMESAS
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Todo salio bien');
        } else {
            reject('Salio mal');
        }
    });
    
};

helloPromise()
    .then(response=>console.log(response))
    .then(()=>console.log('hola'))
    .catch(error=>console.log(error));










