// Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

// Formula de Celsius a Fahrenheit (0 °C × 9/5) + 32 = 32 °F
// Formula de Fahrenheit a Celsius (0 °F − 32) × 5/9 = -17.78 °C

const miFuncion = (numero = undefined, grados = undefined) => {
    if (numero === undefined) {
        return console.warn("Debe ingresar un número para el primer parámetro");
    }

    if (grados === undefined) {
        return console.warn('Debe ingresar una medída Celsius ("C") ó Fahrenheit ("F") como segundo parametro');
    }

    if (typeof numero !== 'number' || typeof grados !== 'string') {
        return console.error("El primer parámetro debe ser un número y el segundo una cadena");
    }

    if (grados === "C") {
        return console.info(`${(numero * 9 / 5) + 32}°F`)
    } else if (grados === "F") {
        return console.info(`${(numero - 32) * 5/9}°C`)
    }
}

miFuncion(0, "C")