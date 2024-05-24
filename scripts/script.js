// Leer más
document.addEventListener("DOMContentLoaded", function() {
    var botonesLeerMas = document.querySelectorAll('.leer-mas');

    botonesLeerMas.forEach(function(boton) {
        boton.addEventListener('click', function() {
            var contenido = this.previousElementSibling;
            contenido.classList.toggle('d-none');
            
            // Cambia el texto del botón según el estado
            this.textContent = contenido.classList.contains('d-none') ? 'Leer más' : 'Leer menos';
        });
    });
});

function abrirVentanaConImagen(urlImagen) {
    window.location.href = urlImagen;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

