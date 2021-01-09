// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, 
// pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

// FUNCION DECLARADA
// function miFuncion(cadena, posicion) {
//     if (typeof (cadena) === 'string' && typeof (posicion) === 'number' && posicion <= cadena.length) {
//         console.log(cadena.slice(0, posicion))
//     } else {
//         console.log("Debe madar como primer parametro una cadena y como segundo un numero valido")
//     }
// }

// FUNCION EXPRESADA
const miFuncion = (cadena = "", posicion = undefined) =>
    (!cadena || typeof(cadena) !== 'string' || posicion > cadena.length)
    ? console.warn("Debe madar como primer parametro una cadena y como segundo un numero valido")
    : (posicion === 'undefined' || typeof(posicion) !== 'number')
        ? console.warn("El segundo parametro es invalido")
        : console.log(cadena.slice(0, posicion));

miFuncion("Hola Mundo", 4)