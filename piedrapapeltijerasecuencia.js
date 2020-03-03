/**
 * @name getRockPaperScissorRandomSequence
 * @description Devuelve una secuencia aleatoria de jugadas de piedra, papel o tijera, con cierta longitud
 *
 * @param {number} length - Longitud de la secuencia
 * @returns {String[]}
 *
 * @example
 *  getRockPaperScissorRandomSequence(4) // returns ["rock", "paper", "rock", "scissor"]
 */

 const getRockPaperScissorRandomSequence = (length) => {
    let jugadas = ["piedra", "papel", "tijera"];
    let jugada = "";
    let secuencia = [];

    for (let i = 0; i < length; i++) {
        jugada = Math.round(Math.random() * (jugadas.length - 1));
        secuencia += jugada + ",";
    }
    return secuencia
 }