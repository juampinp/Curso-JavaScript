// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

// FUNCION DECLARADA
// function miFuncion(cadena) {
//     if (typeof(cadena) === 'string') {
//         console.log(cadena.length)
//     }else {
//         console.log("Debe enviar una cadena como parametro!!!")
//     }
// }

// FUNCION EXPRESADA

const miFuncion = (cadena = "") => 
    (!cadena || typeof(cadena) !== 'string')
    ? console.warn("Debe enviar una cadena como parametro!!!")
    : console.log(cadena.length);

miFuncion("Hola Mundo")