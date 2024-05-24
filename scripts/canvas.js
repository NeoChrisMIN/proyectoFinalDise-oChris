// Obtener el canvas
var canvas = document.getElementById('miCanvas');
var contexto = canvas.getContext('2d');

// Array con los textos del carrusel
var textosCarrusel = [
  "Somos una pequeña empresa\ndedicada a eventos para todo publico.",
  "Organizamos eventos por toda Andalucía\ndesde huelva a Almería.",
  "¿Te guste el anime, videojuegos, el cosplay \no la cultura japonesa en general?,\nEste es tu lugar."
];

var indiceActual = 0; // Índice actual del texto en el carrusel

// Variables para controlar la transición
var transicionDuracion = 1000; // Duración
var transicionInicio; // Marca de tiempo de inicio de la transición
var transicionActiva = false; // transición está activa?

// dibujar texto con transición
function dibujarTextoConTransicion(texto) {
  var tiempoTranscurrido = Date.now() - transicionInicio;
  var opacidad = tiempoTranscurrido / transicionDuracion;

  if (opacidad >= 1) {
    // Fin de transición
    dibujarTexto(texto); // Dibujar sin transición
    transicionActiva = false;
  } else {
    // Transición en curso
    contexto.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas
    contexto.globalAlpha = 1 - opacidad; // Opacidad del texto saliendo
    dibujarTexto(textosCarrusel[indiceActual]); // Dibujar el texto actual con opacidad reducida
    contexto.globalAlpha = opacidad; // Opacidad del texto entrante
    dibujarTexto(texto); // Dibujar el nuevo texto con opacidad creciente
    requestAnimationFrame(function() {
      dibujarTextoConTransicion(texto);
    });
  }
}

// cambiar texto en carrusel con transición
function siguienteTextoConTransicion() {
  indiceActual = (indiceActual + 1) % textosCarrusel.length; // sacar siguiente índice
  if (!transicionActiva) {
    transicionInicio = Date.now(); // Iniciar transición
    transicionActiva = true;
    requestAnimationFrame(function() {
      dibujarTextoConTransicion(textosCarrusel[indiceActual]); // Iniciar transición
    });
  }
}

// dibujar texto en el canvas
function dibujarTexto(texto) {
  contexto.clearRect(0, 0, canvas.width, canvas.height); // Limpia canvas
  contexto.font = "24px Arial";
  contexto.fillStyle = "black";
  contexto.textAlign = "center";
  contexto.textBaseline = "middle";

  // Dividir el texto en múltiples líneas
  var lineas = texto.split('\n');
  var y = canvas.height / 2 - (lineas.length - 1) * 10; // Posición vertical de inicio
  lineas.forEach(function(linea) {
    contexto.fillText(linea, canvas.width / 2, y);
    y += 20; // aumenta posición vertical para siguiente línea
  });
}

// Llamar a dibujarTexto una vez
dibujarTexto(textosCarrusel[indiceActual]);

// Llamar a siguienteTextoConTransicion() con cierto intervalo
setInterval(siguienteTextoConTransicion, 5000);

// Ajusta tamaño del canvas al cargar la página y al cambiar el tamaño de la ventana
function redimensionarCanvas() {
  canvas.width = canvas.parentElement.clientWidth; // Ajusta el ancho
  dibujarTexto(textosCarrusel[indiceActual]); // Volver a dibujar
}

// Llama a redimensionarCanvas() al cargar la página y al cambiar el tamaño de la ventana
window.addEventListener('load', redimensionarCanvas);
window.addEventListener('resize', redimensionarCanvas);