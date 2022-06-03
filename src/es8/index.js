// OBJECT.ENTRIES Y OBJECT.VALUES
const datos = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}


const arrayDeArrays = Object.entries(datos);
console.log(arrayDeArrays);
console.log(arrayDeArrays.length);



const datos2 = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}

const array = Object.values(datos2);
console.log(array);
console.log(array.length);


console.log('hello'.padStart(10,'hi '));
console.log('hello'.padEnd(11, '*-----L'));
console.log('food'.padEnd(12, ' ------' ))


const datos3 = {
    frontend: 'Oscar',  //TRAILING COMAS o sea comas finales al sigiente puede haber un valor o no
}


//FUNCIONES DE TIPO ASYNC CON FUNNCIONES TIPO AWAIT POR DENTRO
const helloWorld = ()=> {
    return new Promise( (resolve, reject)=> {
        (true) // if ternario
        ? setTimeout( ()=> resolve('Hello World, I am awesome:)'), 3000)
        : reject( new Error('***** ERROR DE PRUEBA *****') );
    })
};

const helloAsync = async ()=> {
    const hello = await helloWorld();
    console.log(hello);
};

helloAsync();


const anotherFunction = async ()=> {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch(error) {
        console.log(error);
    }
}

anotherFunction();

//ESTO NO ES DE ES8 PERO ES UN APARTADO DE FRANCISCO ESCOBAR
//PARA ENTENDER ASINCRONISMO EN JAVASCRIPT EMPEZANDO POR CALLBACKS

function soyAsincrona() {
    setTimeout(function() {
            console.log("Hola, estoy siendo asincrona");
    }, 1000);
}

console.log("Iniciando Proceso ...");
soyAsincrona();
console.log("Finalizando Proceso ...");



//AHORA VAMOS A IMPLEMENTAR UN CALLBACK PARA QUE AVISE REALMENTE
//CUANDO TERMINE EL PROCESO

function soyAsincrona(miCallback) {
    setTimeout(function() {
            console.log("Hola, estoy siendo asincrona");
            miCallback();
    }, 1000);
    
}

console.log("Iniciando Proceso ...");
soyAsincrona(function() {
     console.log("Terminando Proceso ...");
    }
);


//AHORA LO QUE VAMOS A HACER ES LLAMAR UN CALLBACK
//DENTRO DEL OTRO CALLBACK PARA DECIR HOLA FULANITO DE TAL Y ADIOS FULANITO DE TAL

function hola(nombre, miCallback) {
    setTimeout(function() {
        console.log('Hola, ' + nombre);
        miCallback(nombre);    
    }, 2000);
}


function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log('Hasta luego ', nombre); //esta forma de concatenar es valida 
        otroCallback();        
    }, 1000);
}


console.log('Iniciando el proceso ...');

hola('Carlos', function(nombre) {    
    adios(nombre, function() {
        console.log('Terminando el proceso ...');           
    }); 
});

//hola('Francisco', ()=>{});
//adios('Francisco', ()=>{});

