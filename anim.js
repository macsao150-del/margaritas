// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Even if my heart stops beating", time: 19, duration: 4 },
  {
    text: "You're the only thing I need, ooh, with me",
    time: 20,
    duration: 10,
  },
  { text: "Even if the Earth starts shaking", time: 32, duration: 4 },
  {
    text: "You're the only thing worth taking, ooh, with me",
    time: 31,
    duration: 11,
  },
  { text: "Even if the sky's on fire", time: 44, duration: 4 },
  { text: "Got you here, it's alright, ooh, with me", time: 45, duration: 10 },
  { text: "And if it's all over", time: 56.1, duration: 3.8 },
  { text: "I'm taking this moment, ooh, with me", time: 58.8, duration: 8.9 },

  { text: "Pretty boy, you did this with me, boy", time: 83.8, duration: 6.8 },
  { text: "Now it's all about to end", time: 91.6, duration: 3.9 },
  { text: "Baby boy, look where we made it, boy", time: 96, duration: 7 },
  { text: "Hmm, now we're falling", time: 103, duration: 4 },

  { text: "As long as I got you", time: 106, duration: 5 },
  { text: "I'm gonna be alright", time: 109, duration: 7 },
  { text: "As long as I got you, yeah", time: 118, duration: 5 },
  { text: "I'm not afraid to die", time: 122.9, duration: 5 },
  { text: "I'm alright'", time: 128, duration: 3 },

  { text: "Even if my heart stops beating", time: 131, duration: 3.9 },
  {
    text: "You're the only thing I need, ooh, with me",
    time: 134,
    duration: 10,
  },
  { text: "Even if the Earth starts shaking", time: 143, duration: 4 },
  {
    text: "You're the only thing worth taking, ooh, with me",
    time: 146.1,
    duration: 10.6,
  },
  { text: "Even if the sky's on fire", time: 154.8, duration: 4 },
  { text: "Got you here, it's alright, ooh, with me", time: 156, duration: 10 },
  { text: "And if it's all over", time: 168, duration: 4 },
  { text: "I'm taking this moment, ooh, with me", time: 169, duration: 9.5 },

  { text: "Wherever I'm going", time: 180, duration: 4 },
  { text: "I'm happy you're coming, ooh, with me", time: 183, duration: 8.3 },
  { text: "With me, yeah", time: 191, duration: 4 },

  { text: "No, I'm lucky you're with me", time: 202, duration: 5 },
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
