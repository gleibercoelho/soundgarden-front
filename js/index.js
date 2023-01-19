const divEventos = document.getElementById('eventos');
const criacaoModal = document.getElementById('modalDiv');
const IdImput = document.getElementById('IdImput')
let contador = 0;
let contador2 = 0;


const params = new URLSearchParams(window.location.search);
const id = params.get("id");
IdImput.value = id;

const getEvents = async () => {

    const events = await fetch(BASE_URL).then((result) => result.json());
    console.log(events);

    events.sort((eventoA, eventoB) => eventoA.scheduled - eventoB.scheduled)
        .slice(0 - 3)
        .forEach((event) => {
            const article = document.createElement('article');
            contador = contador + 1
            article.innerHTML = `
            <article class="evento card p-5 m-3" id="card">
                <div class="headereventos">
                <h2>${event.name}  ${new Date(event.scheduled).toLocaleDateString("pt-BR")}</h2>
                <h4>${event.attractions.join(", ")}</h4>
                </div>
                <p>${event.description}</p>                
                <a href="#" id="${event._id}" onclick="btn('${event._id}')"  class="btn btn-primary">reservar ingresso</a>
            </article>`;

            divEventos.appendChild(article);

            var idEvento = "";

        })
        

    /* const modmod = await fetch(BASE_URL).then((result) => result.json());
    modmod.sort((eventoA, eventoB) => eventoA.scheduled - eventoB.scheduled)
    .slice(0 - 3)
    .forEach((mod) =>{const divModal = document.createElement('div');
    contador2 = contador2+1;
    
    divModal.innerHTML = `
    <div class="modalbody" id="modalDiv" value="${contador2}" display="display:none;">
        <header id="">
         <h1>Fazer Reserva</h1>
         </header>
            <div>
            <form id="formBooking">
            <span>Nome</span>
            <input type="text" name="Nome" id="ownerImput" placeholder="Nome Completo">
            <span>Email</span>
            <input type="email" name="email" id="EmailImput" placeholder="Email">
            <span>ID</span>
            <input type="name" value="${mod._id}" name="id" id="IdImput">
    
        <button type="submit" class="btn-primary">Reservar</button>
        <button class="btn-primary" onclick="acao(evento.${mod._id})">fechar Janela</button>
                </form>
            </div>
    </div>`;
    
    criacaoModal.appendChild(divModal);})
    
    
     */
};

getEvents();


function btn(idEvento) {
    abrirmodal('ModalDiv');
    IdImput.value = idEvento;
    console.log(idEvento, typeof (idEvento))

}

function abrirmodal(carregarmodal) {
    let modal = document.querySelector('.modal');
    modal.style.display = 'block';
}

function fechar(fecharmodal) {
    let modalfechar = document.querySelector('.modal');
    modalfechar.style.display = 'none';

}

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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(raw),
        /* redirect: 'follow', */

    };
    await fetch("https://soundgarden-api.deta.dev/bookings", requestOptions)
        .then(response => response.text())
        .then(() => alert("reserva feita com sucesso"))
        .catch(error => console.log('error', error));


};

const formBooking = document.getElementById('formBooking');

formBooking.addEventListener('submit', function (event) {
    event.preventDefault();
    novoEvento();
    console.log(ownerBooking.value, EmailBooking.value, IdBooking.value);
});