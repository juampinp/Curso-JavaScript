// Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, 
// pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).


const miFuncion = (fecha = undefined) => {
    if (fecha === undefined) {
        return console.warn("Debe pasar una fecha válida como parámetro")
    }
    if (!fecha instanceof Date) {
        return console.error("La fecha enviada no es válida")
    }
    
    let fechaActual = new Date(),
    anios = Math.floor((fechaActual.getTime() - fecha.getTime()) / (1000 * 60 * 60 * 24 * 365));
    console.info(`${anios} años`);
}
miFuncion(new Date(1984, 4, 23));