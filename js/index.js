const divEventos = document.getElementById('eventos');

const getEvents = async () => {

    const events = await fetch(BASE_URL).then((result) => result.json());
    console.log(events);

    events.sort((eventoA,eventoB) => eventoA.scheduled - eventoB.scheduled)
    .slice(0-3)
    .forEach((event) => {
        const article = document.createElement('article');
        article.innerHTML = `
            <article class="evento card p-5 m-3">
                <h2>${event.name} - ${new Date(event.scheduled).toLocaleDateString("pt-BR")}</h2>
                <h5 id="h5">ID ${event._id}</h5>
                <h4>${event.attractions.join(", ")}</h4>
                <p>${event.description}</p>
                <a href="#" onclick="acao()" class="btn btn-primary">reservar ingresso</a>
            </article>`;

        divEventos.appendChild(article);
    })
};

getEvents();

function acao() {
    let modal = document.querySelector('.modal');
    if (modal.style.display === "block") {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'block';
    }
};


/***********************************************cadastro da reserva ************************************************** */

const novoEvento = async () => {
    const ownerBooking = document.getElementById('ownerImput');
    const EmailBooking = document.getElementById('EmailImput');
    const IdBooking = document.getElementById('IdImput');
    const number_ticketsValue = 1;


    var raw = {
        "owner_name": ownerBooking.value,
        "owner_email": EmailBooking.value,
        "number_tickets": number_ticketsValue,
        "event_id": IdBooking.value
    };


    var requestOptions = {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(raw),
        /* redirect: 'follow', */
        
    };
    await fetch("https://soundgarden-api.deta.dev/bookings", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));};


const formBooking = document.getElementById('formBooking');

formBooking.addEventListener('submit', function (event) {
    event.preventDefault();
    novoEvento();
    console.log(ownerBooking.value, EmailBooking.value, IdReserva.value);
});
