function openApp(appId){
  let pages = document.querySelectorAll(".page");
  pages.forEach(function(page){
    page.classList.remove("active");
  });
  document
    .getElementById(appId)
    .classList.add("active");
}

function goHome(){
  let pages = document.querySelectorAll(".page");
  pages.forEach(function(page){
    page.classList.remove("active");
  });
  document
    .getElementById("home")
    .classList.add("active");
}

function sumar(){
  let n1 = Number(
    document.getElementById("n1").value
  );
  let n2 = Number(
    document.getElementById("n2").value
  );
  let resultado = n1 + n2;
  document.getElementById(
    "resultado"
  ).textContent =
    "Resultado: " + resultado;
}

function actualizarHora(){
  let ahora = new Date();
  let horas = ahora
    .getHours()
    .toString()
    .padStart(2,"0");
  let minutos = ahora
    .getMinutes()
    .toString()
    .padStart(2,"0");
  document.getElementById(
    "hora"
  ).textContent =
    horas + ":" + minutos;
}

function actualizarReloj(){
  let ahora = new Date();
  let horas = ahora
    .getHours()
    .toString()
    .padStart(2,"0");
  let minutos = ahora
    .getMinutes()
    .toString()
    .padStart(2,"0");
  let segundos = ahora
    .getSeconds()
    .toString()
    .padStart(2,"0");
  document.getElementById(
    "clockTime"
  ).textContent =
    horas + ":" +
    minutos + ":" +
    segundos;
}

setInterval(function(){
  actualizarHora();
  actualizarReloj();
},1000);
actualizarHora();
actualizarReloj();

function darkMode(){
  document
    .querySelector(".screen")
    .style.background =
      "#111";
}

function lightMode(){
  document
    .querySelector(".screen")
    .style.background =
      "linear-gradient(to bottom, #4facfe, #00f2fe)";
}

function limpiarCalc(){

  document.getElementById("n1").value = "";

  document.getElementById("n2").value = "";

  document.getElementById("resultado").textContent =
    "Resultado:";
}

function wallpaperBlue(){

  let screen =
    document.querySelector(".screen");

  screen.style.background =
    "linear-gradient(to bottom, #4facfe, #00f2fe)";
}

function wallpaperPink(){

  let screen =
    document.querySelector(".screen");

  screen.style.background =
    "linear-gradient(to bottom, hotpink, purple)";
}

function wallpaperNature(){

  let screen =
    document.querySelector(".screen");

  screen.style.backgroundImage =
    "url(https://wallpapers.com/images/hd/hd-nature-phone-foggy-mountain-m1pz478hctll7i2i.jpg)";

  screen.style.backgroundSize =
    "cover";

  screen.style.backgroundPosition =
    "center";
}

function wallpaperSpace(){

    cambiarFondo(
        "https://picsum.photos/id/1002/1200/800"
    );

}


function wallpaperCity(){

    cambiarFondo(
        "https://picsum.photos/id/1011/1200/800"
    );

}


function wallpaperMountain(){

    cambiarFondo(
        "https://picsum.photos/id/1016/1200/800"
    );

}


function wallpaperOcean(){

    cambiarFondo(
        "https://picsum.photos/id/1018/1200/800"
    );

}


function wallpaperGaming(){

    cambiarFondo(
        "https://picsum.photos/id/1018/1200/800"
    );

}

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const box = 20;
const size = 10;

let snake = [];
let food;
let score = 0;
let direction = "RIGHT";
let game = null;
let started = false;

ctx.fillStyle = "#222";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = "white";
ctx.font = "16px Arial";
ctx.textAlign = "center";
ctx.fillText("Pulsa START", canvas.width / 2, canvas.height / 2);

function generateFood() {
    return {
        x: Math.floor(Math.random() * size) * box,
        y: Math.floor(Math.random() * size) * box
    };
}

function startGame() {

    started = true;

    snake = [
        { x: 100, y: 100 }
    ];

    food = generateFood();
    score = 0;
    direction = "RIGHT";

    document.getElementById("score").textContent =
        "Puntos: " + score;

    clearInterval(game);
    game = setInterval(draw, 250);
}

function restartGame() {
    startGame();
}

document.addEventListener("keydown", function(e) {

    if (!started) return;

    if (e.key === "ArrowUp" && direction !== "DOWN")
        direction = "UP";

    if (e.key === "ArrowDown" && direction !== "UP")
        direction = "DOWN";

    if (e.key === "ArrowLeft" && direction !== "RIGHT")
        direction = "LEFT";

    if (e.key === "ArrowRight" && direction !== "LEFT")
        direction = "RIGHT";
});

function collision(head, body) {

    for (let i = 0; i < body.length; i++) {

        if (
            head.x === body[i].x &&
            head.y === body[i].y
        ) {
            return true;
        }
    }

    return false;
}

function draw() {
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, box, box);

    snake.forEach((part, index) => {

        ctx.fillStyle =
            index === 0 ? "#4CAF50" : "#8BC34A";

        ctx.fillRect(
            part.x,
            part.y,
            box,
            box
        );
    });

    let x = snake[0].x;
    let y = snake[0].y;

    if (direction === "UP") y -= box;
    if (direction === "DOWN") y += box;
    if (direction === "LEFT") x -= box;
    if (direction === "RIGHT") x += box;

    if (x === food.x && y === food.y) {

        score++;

        document.getElementById("score").textContent =
            "Puntos: " + score;

        food = generateFood();

    } else {
        snake.pop();
    }

    const head = { x, y };

    if (
        x < 0 ||
        y < 0 ||
        x >= canvas.width ||
        y >= canvas.height ||
        collision(head, snake)
    ) {
        clearInterval(game);
        started = false;
        alert("Game Over\nPuntos: " + score);
        return;
    }

    snake.unshift(head);
}

function restar() {

    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);

    document.getElementById("resultado").textContent =
        "Resultado: " + (n1 - n2);
}

function multiplicar() {

    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);

    document.getElementById("resultado").textContent =
        "Resultado: " + (n1 * n2);
}

function dividir() {

    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);

    if (n2 === 0) {
        document.getElementById("resultado").textContent =
            "No se puede dividir entre 0";
        return;
    }

    document.getElementById("resultado").textContent =
        "Resultado: " + (n1 / n2);
}

var paginaActual = 1;

function mostrarPagina(numero) {

    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "none";

    document.getElementById("page" + numero).style.display = "block";
}

function nextPage() {

    if (paginaActual < 3) {
        paginaActual++;
        mostrarPagina(paginaActual);
    }
}

function prevPage() {

    if (paginaActual > 1) {
        paginaActual--;
        mostrarPagina(paginaActual);
    }
}

window.onload = function() {
    mostrarPagina(1);
};

function askAI(){
  let q = document.getElementById("aiInput").value;

  let answers = [
    "No lo sé 🤖",
    "Interesante pregunta",
    "Estoy aprendiendo...",
    "Eso es complicado 😅"
  ];

  document.getElementById("aiOut").textContent =
    answers[Math.floor(Math.random()*answers.length)];
}

function sendMessage(){
  let msg = document.getElementById("msg").value;

  let box = document.getElementById("chatBox");
  box.innerHTML += "<p>👤 " + msg + "</p>";

  document.getElementById("msg").value = "";
}

function openCamera(){
  document.getElementById("camera").textContent =
    "📷 Cámara abierta (simulación)";
}

function fakeWeather(){
  const el = document.getElementById("weatherText");
  if(el){
    const temps = ["Soleado ☀️", "Nublado ☁️", "Lluvia 🌧️", "Frío ❄️"];
    el.textContent = temps[Math.floor(Math.random() * temps.length)];
  }
}

function playMusic(){
  const el = document.getElementById("music");
  if(el){
    el.textContent = "🎵 Reproduciendo: canción demo";
  }
}

let flashOn = false;

function toggleFlash(){
  const screen = document.querySelector(".screen");
  const title = document.querySelector("#flashlight h2");

  flashOn = !flashOn;

  if(flashOn){
    screen.style.background = "white";
    if(title) title.style.color = "black";
  } else {
    screen.style.background = "black";
    if(title) title.style.color = "white";
  }
}
