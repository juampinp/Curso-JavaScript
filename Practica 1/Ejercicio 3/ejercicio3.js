// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, 
// pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

// FUNCION DECLARADA
// function miFuncion(cadena, separador) {
//     if(typeof(cadena) === 'string' && typeof(separador) === 'string') {
//         console.log(cadena.split(separador))
//     } else {
//         console.log("Ambos parametros deben ser, el primero una cadena y el segundo un caracter")
//     }
// }

// FUNCION EXPRESADA
const miFuncion = (cadena = "", separador = undefined) =>
    (!cadena || typeof(cadena) !== 'string')
    ? console.warn("Ambos parametros deben ser, el primero una cadena y el segundo un caracter")
    : (typeof(separador) !== 'string')
        ? console.warn("El segundo caracter es invalido")
        : console.log(cadena.split(separador));

miFuncion('hola que tal', ' ')