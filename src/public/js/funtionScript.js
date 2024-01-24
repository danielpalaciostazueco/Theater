function recoverFunction () { // recupera el slug
  const queryString = window.location.search
  console.log(queryString)
  const urlParams = new URLSearchParams(queryString)
  return urlParams.get('slug')
}
const slug = recoverFunction()

async function writeData (name) {
  const options = { method: 'GET' }
  const response = await fetch('http://localhost:3000/api/obras/' + name, options)
  return response.json()
}

async function fillFunction (data) {
  const horario = document.querySelector('#horarios')
  for (let i = 0; i < 3; i++) {
    const fecha = new Date(data.obra.dates[i] * 1000)
    const opciones = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }
    const fechaFormateada = fecha.toLocaleDateString('es-ES', opciones) + ' horas'
    horario.innerHTML += `<li class='horarios-txt__item'>${fechaFormateada}</li>`
  }
  const name = document.querySelector('#FunctionName')
  name.innerHTML = data.obra.name

  const text = document.querySelector('#texto-informativo')
  text.innerHTML = data.obra.description

  const photo1 = document.querySelector('#primera-img')
  photo1.src = data.obra.images[0]

  const photo2 = document.querySelector('#segunda-img')
  photo2.src = data.obra.images[1]

  const actores = document.querySelector('#texto-actores')
  for (let i = 0; i < 4; i++) {
    actores.innerHTML += `<li class='frame-repart__item'>${data.obra.actors[i]}</li>`
  }

  const boton = document.querySelector('#boton-comprar')
  boton.innerHTML = `<a href='/comprar-entradas-1.html?slug=${data.obra.slug}'><button class='show-poster__button'>Comprar e información</button></a>`
}

async function fetchData () {
  const data = await writeData(slug)
  fillFunction(data)
}

fetchData()
