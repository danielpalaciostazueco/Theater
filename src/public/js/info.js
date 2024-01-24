const url = 'http://localhost:3000/api/obras'

fetch(url + '/godot')
  .then(response => {
    return response.json()
  })
