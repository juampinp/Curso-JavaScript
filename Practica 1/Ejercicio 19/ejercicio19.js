// Programa una función que valide que un texto sea un nombre válido, 
// pe. miFuncion("Jonathan MirCha") devolverá verdadero.

const miFuncion = (cadena = "") =>
    (!cadena)
        ? console.warn("Ingrese un nombre")
        : (typeof cadena !== 'string')
            ? console.error("El nombre debe ser una cadena válida")
            : (/^([A-Z][a-z]+)\s([A-Z][a-z]+)\s?([A-Z][a-z]+)?\s?([A-Z][a-z]+)?$/g.exec(cadena))
                ? console.info(`El nombre "${cadena}" es válido`)
                : console.error(`La cadena "${cadena}" no es un nombre válido`);


miFuncion("Jonathan MirCha")