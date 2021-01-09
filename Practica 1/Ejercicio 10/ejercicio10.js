// Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), 
// pe. miFuncion(2002) devolverá true.

const miFuncion = (numero = undefined) =>
    (numero === undefined)
    ? console.warn("Debe ingresar un numero como parametro")
    : (typeof(numero) !== 'number')
        ? console.warn("El parámetro ingresado debe ser un número")
        : console.info(numero.toString() === numero.toString().split("").reverse().join(""));

miFuncion(2002)