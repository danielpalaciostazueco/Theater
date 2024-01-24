function displayPosters (fatherElement) { // hace las tarjetas con la info de las obras
  const options = { method: 'GET' }
  fetch('http://localhost:3000/api/obras', options)
    .then(response => response.json())
    .then(response => {
      const obras = response.obras
      for (let i = 0; i < obras.length; i++) {
        const obra = obras[i]
        fatherElement.innerHTML += "<div class='show-poster' >" +
        "<div class='show-poster__image' >" +
        "<img src='" + obra.images[0] + "' />" +
        '</div>' +
        "<div class='show-poster__details' >" +
        "<h3 class='show-poster__details__title' >" + obra.name + '</h3>' +
        `<a href='/funcion.html?slug=${obra.slug}'><button class='show-poster__button'>Comprar e información</button></a>` +
        '</div>' +
        '</div>'
      }
    })
}
