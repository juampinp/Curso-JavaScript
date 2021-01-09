// Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const miFuncion = (numero = undefined) =>
    (numero === undefined)
    ? console.warn("Debe enviar un número como parámetro")
    : (typeof numero !== 'number')
        ? console.warn("El parámetro enviado debe ser un número")
        : (numero % 2 === 0)
            ? console.info(`El número ${numero} es par`)
            : console.info(`El número ${numero} es impar`);

miFuncion(29)
