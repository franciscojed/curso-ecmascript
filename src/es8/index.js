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


console.log('hello'.padStart(7,'hi'));
console.log('hello'.padEnd(12, ' ----L'));
console.log('food'.padEnd(12, ' ------' ))


const datos3 = {
    frontend: 'Oscar',  //TRAILING COMAS o sea comas finales al sigiente puede haber un valor o no
}


