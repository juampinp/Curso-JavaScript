// 4) Programa una función que repita un texto X veces, 
// pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

// FUNCION DECLARADA
// function miFuncion(cadena, repeticiones) {
//     if (typeof (cadena) === 'string' && typeof (repeticiones) === 'number') {
//         let valor = " " + cadena;
//         for (let i = 0; i < repeticiones; i++) {
//             cadena += valor;
//         }
//         console.log(cadena);
//     } else {
//         console.warn("Se debe enviar como primer parametro una cadena y como segundo parametro un numero")
//     }
// }

// FUNCION EXPRESADA
const miFuncion = (cadena = "", repeticiones = undefined) => {
    if (!cadena || typeof (cadena) !== 'string') return console.warn("Se debe enviar como primer parametro una cadena y como segundo parametro un numero")
    
    if (repeticiones === 'undefined' || typeof (repeticiones) !== 'number') return console.warn("El segundo parametro debe ser un numero")

    let valor = " " + cadena;
    for (let i = 0; i < repeticiones; i++) cadena += valor;
    console.log(cadena);
}


miFuncion('Hola Mundo', 3)