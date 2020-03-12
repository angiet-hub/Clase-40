/**
 * @name removeDuplicates
 * @description Remueve duplicados de un array 
 *
 * @param {[]} arr - Array con duplicados a remover
 * @returns {[]} - El array resultante sin duplicados
 * 
 * @example
 *  removeDuplicates([4, 5, 10, 4, 10, 2]) // returns [4, 5, 10, 2]
 */

const removeDuplicates = (arr) => {
    let resultado = [];

    for(let i = 0; i < arr.length; i++ ) {
        if(arr[i] !== arr[i]) {
            resultado.push(arr[i]);
        }
    }
    return resultado;
}