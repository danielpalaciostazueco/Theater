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
    horario.innerHTML += `<li class='horarios-txt__item'>${fechaFormateada}<a class="show-poster__button" href="./ComprarEntradas-2.html?slug=${data.obra.slug}">Comprar</a></li>`
  }

  const name = document.querySelector('#FunctionName')
  name.innerHTML = data.obra.name

  const photo1 = document.querySelector('#primera-img')
  photo1.src = data.obra.images[0]
}

async function fetchData () {
  const data = await writeData(slug)
  fillFunction(data)
}

fetchData()
