//Hecho con jquery
// Definir las clases de tarjeta y grid
const categorias = ['cartoon', 'pelicula', 'anime', 'original', 'game'];

$(document).ready(function() {
    categorias.forEach(categoria => {
        // Construir selectores para las tarjetas y grids
        const cardSelector = `.card-${categoria}`;
        const gridSelector = `.grid-${categoria}`;

        // Obtener los elementos
        const $cards = $(cardSelector);
        const $imagenGrids = $(gridSelector);

        // Iterar sobre cada par de elementos
        $imagenGrids.each(function(index) {
            const $imagenGrid = $(this);
            const $card = $cards.eq(index);

            // Agregar evento de mouseover a imagenGrid para activar la animación
            $imagenGrid.on('mouseover', function() {
                $card.addClass('card-animacion-activo');
            });

            // Agregar evento de mouseout a imagenGrid para desactivar la animación
            $imagenGrid.on('mouseout', function() {
                $card.removeClass('card-animacion-activo');
            });
        });
    });
});


/* // Con javascripts puro
// Definir las clases de tarjeta y grid
const categorias = ['cartoon', 'pelicula', 'anime', 'original', 'game'];

categorias.forEach(categoria => {
    // Construir selectores para las tarjetas y grids
    const cardSelector = `.card-${categoria}`;
    const gridSelector = `.grid-${categoria}`;
    
    // Obtener los elementos
    const cards = document.querySelectorAll(cardSelector);
    const imagenGrids = document.querySelectorAll(gridSelector);

    // Iterar sobre cada par de elementos
    cards.forEach((card, index) => {
        const imagenGrid = imagenGrids[index];
        if (card && imagenGrid) {
            // Agregar evento de mouseover a imagenGrid para activar la animación
            imagenGrid.addEventListener('mouseover', () => {
                card.classList.add('tilt-animation-active');
            });

            // Agregar evento de mouseout a imagenGrid para desactivar la animación
            imagenGrid.addEventListener('mouseout', () => {
                card.classList.remove('tilt-animation-active');
            });
        }
    });
});*/
