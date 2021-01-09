// Programa una función para contar el número de veces que se repite una palabra en un texto largo, 
// pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const miFuncion = (cadena = "", palabra = undefined) => {
    if (!cadena || typeof (cadena) !== 'string' || palabra === 'undefined' || typeof(palabra) !== 'string') {
        return console.warn('Los parametros no son válidos. Ingrese como primer parametro una cadena, y como segundo la palabra a buscar')
    }
    let regex = RegExp(palabra, "ig")
    if (cadena.match(regex)) {
        return console.log(cadena.match(regex).length);
    } else {
        return console.log(0)
    }
}

miFuncion("hola mundo adios mundo", "mundo");
