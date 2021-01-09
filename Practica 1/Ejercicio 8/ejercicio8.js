// Programa una función que elimine cierto patrón de caracteres de un texto dado, 
// pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const miFuncion = (cadena = "", patron = undefined) => {
    if (!cadena || typeof (cadena) !== 'string' || patron === 'undefined' || typeof (patron) !== 'string') {
        return console.warn("Los parametros pasados son invalidos, ingrese como primer parametro una cadena y como segundo un patron de caracteres")
    }
    let regex = RegExp(patron, "ig")
    console.info(cadena.replace(regex, ""))
}

miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")