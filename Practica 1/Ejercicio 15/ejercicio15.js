// Programa una función para convertir números de base binaria a decimal y viceversa, 
// pe. miFuncion(100,2) devolverá 4 base 10.

const miFuncion = (numero = undefined, base = undefined) => {
    if (numero === undefined) {
        return console.warn("Debe ingresar un número a convertir");
    }

    if (base === undefined) {
        return console.warn("Debe ingresar la base del número a convertir");
    }

    if (typeof numero !== 'number' || typeof base !== 'number') {
        return console.error("Tanto el número como la base deben ser de tipo numérico");
    }
    
    if (base === 2) {
        return console.info(`${parseInt(numero,base)} base 10`);
    } else if (base === 10) {
        return console.info(`${numero.toString(2)} base 2`);
    }
}


miFuncion(10, 2);