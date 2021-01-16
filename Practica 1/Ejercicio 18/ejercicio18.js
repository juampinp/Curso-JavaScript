// Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, 
// pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

const miFuncion = (cadena = "") => {
    if (!cadena) {
        return console.warn("Ingrese una cadena de texto");
    }
    if (typeof cadena !== 'string') {
        return console.warn("Debe ingresar una cadena de texto válida");
    }


    let vocales = /[aeiou]/ig,
        consonantes = /[^!aeiou\d\W]/ig;

    console.info(`Vocales:${contador(cadena.match(vocales))} Consonantes:${contador(cadena.match(consonantes))}`);
}

function contador(arreglo) {
    if (arreglo === null) {
        return 0;
    } 
    return arreglo.length
}

miFuncion("Hola Mundo")