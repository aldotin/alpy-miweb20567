
    // Lista de imágenes
    const imagenes = [
"costa/1.jpg",
  "costa/2.jpg",
  "costa/3.jpg",
  "costa/4,.jpg",
  "costa/5.jpg",
  "costa/6.jpg",
  "costa/7.jpg",
  "costa/8.jpg",
  "costa/9.jpg",
      "costa/10.jpg"
  
  
    ];

    let indice = 0;
    const img = document.getElementById("imagen");

    function mostrarSiguienteFoto() {
      // Cambiar la imagen con opacidad
      img.style.opacity = 0;

      setTimeout(() => {
        img.src = imagenes[indice];
        img.style.opacity = 1;

        indice = (indice + 1) % imagenes.length; // volver al inicio al final
      }, 500);
    }

    // Mostrar la primera imagen al cargar
    mostrarSiguienteFoto();

    // Cambiar imagen cada 3 segundos
    setInterval(mostrarSiguienteFoto, 3000);
  