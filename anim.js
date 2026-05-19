// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Even if my heart stops beating", time: 22, duration: 4 },
  {
    //19
    text: "You're the only thing I need, ooh, with me",
    time: 23, //20
    duration: 10,
  },
  { text: "Even if the Earth starts shaking", time: 34, duration: 4 },
  {
    //31
    text: "You're the only thing worth taking, ooh, with me",
    time: 35, //32
    duration: 11,
  },
  { text: "Even if the sky's on fire", time: 47, duration: 4 }, //44
  { text: "Got you here, it's alright, ooh, with me", time: 48, duration: 10 }, //45
  { text: "And if it's all over", time: 59.1, duration: 3.8 }, //56.1
  { text: "I'm taking this moment, ooh, with me", time: 61.5, duration: 8.9 }, //58.8
  //listo
  { text: "Pretty boy, you did this with me, boy", time: 86.5, duration: 6.8 }, //83.8
  { text: "Now it's all about to end", time: 94.3, duration: 3.9 }, //91.6
  { text: "Baby boy, look where we made it, boy", time: 98.8, duration: 7 }, //96
  { text: "Hmm, now we're falling", time: 105.7, duration: 4 }, //103
  //listo
  { text: "As long as I got you", time: 108.6, duration: 5 }, //106
  { text: "I'm gonna be alright", time: 111.7, duration: 7 }, //109
  //listo
  { text: "As long as I got you, yeah", time: 120.8, duration: 5 }, //118
  { text: "I'm not afraid to die", time: 125.6, duration: 5 }, //122.9
  { text: "I'm alright'", time: 131, duration: 3 }, //128
  //listo
  { text: "Even if my heart stops beating", time: 133.7, duration: 4 }, //131
  {
    text: "You're the only thing I need, ooh, with me", //134
    time: 136.6,
    duration: 10,
  },
  //listo
  { text: "Even if the Earth starts shaking", time: 145.6, duration: 4 }, //143
  {
    text: "You're the only thing worth taking, ooh, with me",
    time: 150.4, //146.7
    duration: 10.6,
  },
  { text: "Even if the sky's on fire", time: 158.4, duration: 4 }, //154.8
  {
    text: "Got you here, it's alright, ooh, with me",
    time: 159.6,
    duration: 10,
  }, //156
  { text: "And if it's all over", time: 171.5, duration: 4 }, //168
  { text: "I'm taking this moment, ooh, with me", time: 172.5, duration: 9.5 }, //169

  { text: "Wherever I'm going", time: 183.6, duration: 4 }, //180
  { text: "I'm happy you're coming, ooh, with me", time: 186.5, duration: 8.3 }, //183
  { text: "With me, yeah", time: 194.5, duration: 4 }, //191

  { text: "No, I'm lucky you're with me", time: 205.5, duration: 5 }, //202
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + (line.duration || 6),
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
