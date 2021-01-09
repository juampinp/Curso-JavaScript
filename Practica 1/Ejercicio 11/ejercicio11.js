// Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, 
// se define como el producto de todos los números enteros positivos desde 1 hasta n), 
// pe. miFuncion(5) devolverá 120.

const miFuncion = (numero = undefined) => {
    if (numero === undefined) {
        return console.warn("Debe ingresar un número como parámetro");
    }
    if (typeof (numero) !== 'number') {
        return console.warn("El parámetro debe ser un número");
    }
    if (numero < 0) {
        return console.warn("El número debe ser positivo");
    }

    let factorial = 1;
    for (let i = 1; i <= numero ; i++) {
        factorial *= i;
    }
    console.info(`Factorial de ${numero}: ${factorial}`);
}

miFuncion(5)