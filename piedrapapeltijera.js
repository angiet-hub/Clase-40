/**
 * @name getRockPaperScissor
 * @description Devuelve una jugada aleatoria de piedra, papel o tijera
 * 
 * @returns {String} - Devuelve "rock", "paper" o "scissor"
 *
 * @example
 *  getRockPaperScissor() // returns "paper"
 */

 const getRockPaperScissor = () => {
    const jugada = ["piedra", "papel", "tijera"];
    return jugada[Math.round(Math.random() * (jugada.length - 1))];
 }