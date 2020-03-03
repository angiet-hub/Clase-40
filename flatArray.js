/**
 * @name flatArray
 * @description Dado un array 2D, devuelve un array 1D que contiene todos los ítems 
 *
 * @param {[][]} arr - Array 2D a "aplanar" 
 * @returns {[]} - El array "aplanado"
 * 
 * @example
 *  flatArray([[1, 5, 4], [3, 10], [2, 5]]) // returns [1, 5, 6, 3, 10, 2, 5]
 */

/* const flatArray = (arr) => {
    let resultado = [","];

    for(let i = 0; i < arr.length; i++) {
        
        resultado += arr[i] + ",";
    }
    return resultado
} */

const flatArray = (arr) => {
    let resultado = [];

    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            resultado.push(arr[i][j]);
        }
        
    }
    return resultado;
}