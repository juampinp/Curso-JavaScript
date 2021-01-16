// Programa una función que valide que un texto sea un email válido, 
// pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

const miFuncion = (email = "") =>
    (!email)
    ? console.warn("Debe ingresar un email")
    : (typeof email !== 'string')
        ? console.error("El parámetro debe ser un email")
        : (/^[a-z0-9._-]+@[a-z-]+\.[a-z]{2,3}$/i.test(email))
            ? console.info(`El email "${email}" es válido`)
            : console.warn(`El email "${email}" no es válido`);

miFuncion("juampi.nieva@gmail.com");