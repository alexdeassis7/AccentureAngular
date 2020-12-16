//var -> para variables globales
//let -> variables locales 
/*var foo = 123 ;
if (true){
    var foo = 456;
}
console.log(foo); //456

let foo2 = 123 ;
if (true){
    let foo2 = 456;
}
console.log(foo2); //123*/
// const foo3 = 123 ; 
// foo3 = 456;//no permitido
var foo4 = { nombre: "alex",
    apellido: "de assis",
    edad: "25" };
console.log(foo4);
//foo4 = { bar: 456}; // ERROR no se permite la modificacion de objeto
foo4.nombre = "pepe";
foo4.apellido = "argento";
foo4.edad = "45";
console.log(foo4);
//Tipos de datos Primitivos en TS
//Fuertemente Tipado
//Boolean 
var isDone = false;
console.log('isDone :  ' + isDone);
//Dato numericos (Number)
var decimal = 6;
console.log('decimal : ' + decimal);
var hex = 0xf00d; //0123456789ABCDEF
console.log('hexadecimal : ' + hex);
var binary = 9; //0 1
console.log('Binario : ' + binary);
var octal = 569; // 01234567
console.log('octal : ' + octal);
//Dato de tipo String - Cadena de caracteres y/o textos
var color = "blue";
console.log('color: ' + color);
color = 'red';
console.log('color: ' + color);
//tambien se pueden utilizar "Templates" plantillas para concatenar
var fullName = "Barbara Otero";
var age = 24;
var sentence = "Hello , my name is " + fullName + ". I'll be " + (age + 1) + "  years old next month.";
console.log(sentence);
//concatenacion equivalente
var sentence2 = "Hello , my name is " + fullName + "." + "I'll be " + (age + 1) + "years old next month.";
console.log(sentence2);
