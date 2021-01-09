// Programa una función que invierta las palabras de una cadena de texto, 
// pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const miFuncion = (cadena = "") =>
    (!cadena || typeof(cadena) !== 'string')
    ? console.warn('El parametro es invalido, ingrese una cadena!')
    : console.log(cadena.split("").reverse().join(""))

miFuncion("Hola Mundo")