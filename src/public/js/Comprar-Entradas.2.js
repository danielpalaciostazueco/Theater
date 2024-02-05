// Variable para almacenar los asientos seleccionados
let asientosSeleccionados = [];

// Recuperación del slug y carga de datos de la obra
async function fetchData() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const slug = urlParams.get('slug');
    console.log('Slug de la obra:', slug);

    const response = await fetch(`http://localhost:3000/api/obras/${slug}`, { method: 'GET' });
    if (!response.ok) {
        console.error('Error fetching obra data');
        return;
    }
    const data = await response.json();

    const name = document.querySelector('#FunctionName');
    name.innerHTML = data.obra.name;

    const photo1 = document.querySelector('#primera-img');
    photo1.src = data.obra.images[0];

    await fetchAsientosComprados(slug);
}

async function fetchAsientosComprados(slug) {
    try {
        const response = await fetch(`http://localhost:3000/api/asientos/${slug}`, { method: 'GET' });
        if (!response.ok) {
            console.error('Error fetching asientos data');
            return;
        }
        const { butacasOcupadas } = await response.json();
        asientosSeleccionados = butacasOcupadas;
    } catch (error) {
        console.error('Error fetching asientos data:', error);
    }
}

function marcarAsientosComprados(butacasOcupadas) {
    butacasOcupadas.forEach(seatId => {
        const seat = document.getElementById(seatId);
        if (seat) {
            seat.classList.add('comprado');
            seat.style.backgroundColor = 'red';
        }
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    await fetchData();

    const cinemaSeats = document.getElementById('cinema-seats');
    const totalPrice = document.getElementById('total-price');
    const buyButton = document.getElementById('buy-button');

    const filas = 4;
    const asientos = 10;
    let idAsientos = 0;

    for (let i = 0; i < filas; i++) {
        const row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j < asientos; j++) {
            const seat = document.createElement('div');
            seat.classList.add('seat');
            seat.id = `seat-${idAsientos++}`;
            seat.addEventListener('click', () => selectSeat(seat));
            row.appendChild(seat);

            if (asientosSeleccionados.includes(seat.id)) {
                seat.classList.add('comprado');
                seat.style.backgroundColor = 'red';
            }
        }

        cinemaSeats.appendChild(row);
    }

    function selectSeat(seat) {
        if (!seat.classList.contains('comprado')) {
            seat.classList.toggle('selected');
            updatePrice();
        }
    }

    function updatePrice() {
        const selectedSeats = document.querySelectorAll('.seat.selected').length;
        totalPrice.innerText = `Precio Total: ${selectedSeats * 5} €`;
    }

    buyButton.addEventListener('click', async () => {
        const selectedSeats = Array.from(document.querySelectorAll('.seat.selected')).map(seat => seat.id);
        await postAsientosSeleccionados(selectedSeats);
    });
});

async function postAsientosSeleccionados(seatsToBuy) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const slug = urlParams.get('slug');

    const response = await fetch(`http://localhost:3000/api/asientos/${slug}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ asientosSeleccionados: seatsToBuy })
    });

    if (response.ok) {
        alert('La compra ha sido un éxito');
        // Agregar los asientos comprados en este post a la lista existente
        asientosSeleccionados.push(...seatsToBuy);
        seatsToBuy.forEach(seatId => {
            const seat = document.getElementById(seatId);
            if (seat) {
                seat.classList.remove('selected');
                seat.classList.add('comprado');
                seat.style.backgroundColor = 'red';
            }
        });

        // Llamar a fetchAsientosComprados para actualizar la lista de asientos seleccionados
        await fetchAsientosComprados(slug);

        updatePrice();
    } else {
        const errorText = await response.text();
        alert(`Hubo un problema con la compra: ${errorText}`);
    }
}
