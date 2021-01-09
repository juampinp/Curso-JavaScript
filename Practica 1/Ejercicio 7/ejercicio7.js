// Programa una función que valide si una palabra o frase dada, es un palíndromo(que se lee igual en un sentido que en otro), 
// pe.mifuncion("Salas") devolverá true.

const miFuncion = (cadena) => {
    if (!cadena || typeof (cadena) !== 'string') {
        return console.warn("Se debe enviar una cadena como parámetro");
    }

    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i].toUpperCase() !== cadena[cadena.length - i - 1].toUpperCase()) {
            return console.log(false);
        }
    }
    return console.log(true);
}

miFuncion("Salas");
