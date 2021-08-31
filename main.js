// Función Operación();
const multiplicacion=(x,y)=> {return console.log(x * y);};
 multiplicacion(9,5);
console.log(`Dios tiene el control`);
//Funciones Flechas

const saludar1=()=> {return console.log(`Dios es Amor`);};
saludar1();
const saludar=()=>{return(`Hola Mundo`)};
console.log(saludar());

        const saludar3=()=> {return console.log(8+9);};
        const condi= num1=>num1>= 3 ? 'Se cumple':'no se cumple'
console.log(condi(3));
saludar3();

// Funciones autoejecutables

const resultado=(function(num1, num2){
    return num1+num2;
})(8,3)

console.log(resultado);


// Clausuras

const sumarDeUnoAUno=(function() {let numero=0;return function () {numero++;return numero;};})();
console.log(sumarDeUnoAUno());

// const sumarDeUnoAUno=(function() {
//     let data=[];
//     return function (nombre) {
//         data in (nombre!=null && nombre!=undefined)
//         data.push(nombre);
//         return data;
//     };
// })();
// console.log(sumarDeUnoAUno('jose'));

let men=`Hola, Dios es Amor`

const mensaje=(function(mensaje) {
    console.log(`Exitos, ${mensaje}`);
})(men);

mensaje;

const resultado2=()=>(2+3);

console.log(resultado2());