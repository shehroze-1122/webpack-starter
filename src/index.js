import generateJoke from "./generateJoke.js";
import laughing from "./assets/laughing.svg";
import "./styles/main.scss";

const emoji = document.getElementById("laugh-emoji");
emoji.src = laughing;
generateJoke();

const getJokeBtn = document.getElementById("jokeBtn");

getJokeBtn.addEventListener("click", generateJoke);
