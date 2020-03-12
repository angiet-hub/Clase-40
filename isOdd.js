/**
 * @name isOdd
 * @description Devuelve si un número es impar
 * 
 * @param {number} x - El número a evaluar
 * @returns {Boolean} Devuelve true si el número {x} es impar, false sino
 *
 * @example
 *  isOdd(3) // returns true
 */


const isOdd = (x) => {
    if (x % 2 !== 0) {
        return true
    } else {
        return false
    }
}
console.log(isOdd(2))

//____________ Operador ternario_____________//

const isOdd = x => x % 2 !== 0 ? true : false

//_______________Simplificado______________//
const isOdd = x => {
    return x % 2 !== 0 
}
