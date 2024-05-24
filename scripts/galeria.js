$(document).ready(function() {
    // constante con todos los enlaces
    const miniaturas = {
        "2017": ["images/galeria/1/1-1.jpg", "images/galeria/1/1-2.jpg", "images/galeria/1/1-3.jpg"],
        "2019": ["images/galeria/2/2-1.jpg", "images/galeria/2/2-2.jpg", "images/galeria/2/2-3.jpg"],
        "2021": ["images/galeria/3/3-1.jpg", "images/galeria/3/3-2.jpg", "images/galeria/3/3-3.jpg"],
    };

    //llamamos a cargarMiniaturas con el año del botón pulsado dándole las imágenes correspondientes
    $(".galeria-btn").click(function() {
        const year = $(this).data("year");
        cargarMiniaturas(miniaturas[year]);
    });

    // carga las imágenes
    function cargarMiniaturas(imagenes) {
        const miniaturasDiv = $("#miniaturas");
        miniaturasDiv.fadeOut(300, function() {
            miniaturasDiv.empty(); //vacía las anteriores imágenes
            imagenes.forEach(imagen => {
                const imgElement = `<img src="${imagen}" alt="Miniatura de imagenes sobre los eventos realizados, se puede observar imagendes de lugares como de personas y puestos, entre otros" class="img-thumbnail misminiaturas ajustes-tamano-miniatura" tabindex="0">`;
                miniaturasDiv.append(imgElement);
            });
            miniaturasDiv.fadeIn(300);
        });
    }

    //al pulsar en una imagen pone la imagen en el "video-principal"
    $("#miniaturas").on("click", "img", function() {
        const src = $(this).attr("src");
        $("#video-principal").fadeOut(300, function() {
            $(this).replaceWith(`<img id="video-principal" src="${src}" alt="Imagen principal, con tematica de los eventos realizado" class="d-block mx-auto ajustes-tamano" tabindex="0">`);
            $("#video-principal").fadeIn(300);
        });
    });
});