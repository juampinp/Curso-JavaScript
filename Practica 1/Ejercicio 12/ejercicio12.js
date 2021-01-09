// Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, 
// pe. miFuncion(7) devolverá true.

const miFuncion = (numero = undefined) => {
    if (numero === undefined) return console.warn("Debe enviar un número por parametro");

    if (typeof numero !== 'number') return console.warn("El parámetro debe ser un número");

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return console.info(`El número ${numero} no es primo`);
        }
    }

    return console.info(`El número ${numero} es primo`);
}

miFuncion(7)