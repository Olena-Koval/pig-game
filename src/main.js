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

// Variables de estado en JS y selectores DOM
const sectionPlayer0 = document.querySelector(".player--0");
const sectionPlayer1 = document.querySelector(".player--1");
const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");
const currentScore0 = document.querySelector("#current--0");
const currentScore1 = document.querySelector("#current--1");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
const btnRoll = document.querySelector(".btn--roll");
const imgDice = document.querySelector(".dice");

// Variables de estado del juego
let score, currentScore, activePlayer;

// Inicializamos el estado del juego
const initData = () => {
  score = [0, 0]; // Puntuaciones de los jugadores
  currentScore = 0; // Puntuación actual de la ronda
  activePlayer = 0; // Jugador activo (0 = Jugador 1, 1 = Jugador 2)

  imgDice.classList.add("hidden");
  score0.textContent = 0;
  score1.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
};

initData();

// Función para tirar el dado
btnRoll.addEventListener("click", throwDice);

function throwDice() {
  const diceNumber = Math.trunc(Math.random() * 6 + 1); // Generar un número aleatorio entre 1 y 6
  imgDice.classList.remove("hidden");
  imgDice.src = `dice-${diceNumber}.png`;

  if (diceNumber !== 1) {
    updateCurrentScore(diceNumber);
  } else {
    switchPlayer();
  }
}

// Función para actualizar la puntuación actual del jugador activo
function updateCurrentScore(diceNumber) {
  currentScore += diceNumber;
  if (activePlayer === 0) currentScore0.textContent = currentScore;
  else currentScore1.textContent = currentScore;
}

// Función para cambiar de jugador
function switchPlayer() {
  resetCurrentScore();
  sectionPlayer0.classList.toggle("player--active");
  sectionPlayer1.classList.toggle("player--active");
  activePlayer = activePlayer === 0 ? 1 : 0;
}

// Función para resetear la puntuación actual
function resetCurrentScore() {
  currentScore = 0;
  if (activePlayer === 0) currentScore0.textContent = currentScore;
  else currentScore1.textContent = currentScore;
}

// Función para el botón "HOLD"
btnHold.addEventListener("click", function() {
  // Añadir la puntuación actual al total del jugador activo
  score[activePlayer] += currentScore;

  // Actualizar la puntuación en el DOM
  if (activePlayer === 0) score0.textContent = score[activePlayer];
  else score1.textContent = score[activePlayer];

  // Verificar si el jugador ha ganado
  if (score[activePlayer] >= 100) {
    document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
    alert(`Player ${activePlayer + 1} wins!`);
  } else {
    // Cambiar de jugador
    switchPlayer();
  }

  // Resetear la puntuación actual
  resetCurrentScore();
});

// Función para el botón "New Game"
btnNew.addEventListener("click", initData);

