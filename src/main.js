// Importamos los estilos CSS para la aplicación

import "./style.css";
// Seleccionamos el elemento con id "app" y añadimos la estructura HTML del juego dinámicamente
document.querySelector("#app").innerHTML = `
    <main>
      <section class="player player--0 player--active">
        <h2 class="name" id="name--0">Player 1</h2>
        <p class="score" id="score--0">43</p>
        <div class="current">
          <p class="current-label">Current</p>
          <p class="current-score" id="current--0">3</p>
        </div>
      </section>
      <section class="player player--1">
        <h2 class="name" id="name--1">Player 2</h2>
        <p class="score" id="score--1">24</p>
        <div class="current">
          <p class="current-label">Current</p>
          <p class="current-score" id="current--1">5</p>
        </div>
      </section>

      <img src="dice-5.png" alt="Playing dice" class="dice" />
      <button class="btn btn--new">🔄 New game</button>
      <button class="btn btn--roll">🎲 Roll dice</button>
      <button class="btn btn--hold">📥 Hold</button>
    </main>

`;

// variables de estado en JS y selectores DOMXS
// Secciones de cada jugador en el DOM
// activePlayer -> variable de estado en JS
const sectionPlayer0 = document.querySelector(".player--0");
const sectionPlayer1 = document.querySelector(".player--1");
// Puntuaciones totales de los jugadores
// score = [0,0] -> variable de estado en JS
const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");
// Puntuaciones actuales en la ronda
// current -> variable de estado en JS
const currentScore0 = document.querySelector("#current--0");
const currentScore1 = document.querySelector("#current--1");
// Botones de la interfaz
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
const btnRoll = document.querySelector(".btn--roll");
// Imagen del dado
const imgDice = document.querySelector(".dice");
// Variables de estado del juego
let score, currentScore, activePlayer;

const initData = () => {
  // Inicializar los valores de las variables de estado
  // init state variables
  score = [0, 0]; // Puntuaciones de los jugadores
  currentScore = 0; // Puntuación actual de la ronda
  activePlayer = 0; // Jugador activo (0 = Jugador 1, 1 = Jugador 2)

  // init DOM elements
  // Reiniciar los elementos del DOM
  imgDice.classList.add("hidden");
  score0.textContent = 0;
  score1.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
};
// Llamamos a la función para iniciar el juego
initData();

btnRoll.addEventListener("click", throwDice);

function throwDice() {
  // Generar un número aleatorio entre 1 y 6
  // generar un número del 1 al 6
  const diceNumber = Math.trunc(Math.random() * 6 + 1);
  // Mostrar el dado con la imagen correspondiente
  // mostrar el número
  imgDice.classList.remove("hidden");
  imgDice.src = `dice-${diceNumber}.png`;
  // Si el dado NO es 1, se actualiza la puntuación
  if (diceNumber !== 1) updateCurrentScore(diceNumber);
  else switchPlayer();      // Si es 1, cambia de jugador
}

function updateCurrentScore(diceNumber) {
  // Sumar el número del dado a la puntuación actual
  // Mostrar la puntuación en el jugador activo
  currentScore += diceNumber; // current = current + diceNumber
  if (activePlayer === 0) currentScore0.textContent = currentScore;
  else currentScore1.textContent = currentScore;
}

function switchPlayer() {
  {
    // Reiniciar la puntuación actual antes de cambiar de jugador
    // currentScore se tiene que resetear a 0 y también en el DOM!!!
    resetCurrentScore();

    // css cambiará

    sectionPlayer0.classList.toggle("player--active");
    sectionPlayer1.classList.toggle("player--active");

    // versión larga:
    // if (activePlayer === 0) {
    //   sectionPlayer0.classList.remove("player--active");
    //   sectionPlayer1.classList.add("player--active");
    // } else {
    //   sectionPlayer1.classList.remove("player--active");
    //   sectionPlayer0.classList.add("player--active");
    // }

    // activePlayer cambia de 0 a 1 ó de 1 a 0
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
}

function resetCurrentScore() {
  currentScore = 0; // current = current + diceNumber
  // Actualizar la puntuación en el DOM
  if (activePlayer === 0) currentScore0.textContent = currentScore;
  else currentScore1.textContent = currentScore;
}
