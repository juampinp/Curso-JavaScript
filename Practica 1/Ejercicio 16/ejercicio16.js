// Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, 
// pe. miFuncion(1000, 20) devolverá 800.

const miFuncion = (monto = undefined, descuento = 0) => 
    (monto === undefined) 
    ? console.warn("Debe ingresar un monto")
    : (typeof monto !== 'number')
        ? console.warn("El monto ingresado debe ser un número")
        : (descuento === 0)
            ? console.info(`Descuento del ${descuento}% al monto $${monto}: $${monto}`)
            : console.info(`Descuento del ${descuento}% al monto $${monto}: $${ monto - (monto * (descuento/100))}`)

miFuncion(1000, 20)