const endpointbooking = "https://soundgarden-api.deta.dev/bookings/event/";
const tabelabooking = document.getElementById('tabelaCorpo');
const botesAcao = document.getElementById('botoesAcao');
let contador = 0

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

function listarBooking(bookingDados) {
    tabelabooking.innerHTML = '';
    bookingDados.forEach(booking => {
        let th = document.createElement('tr');
        let tdOwnerName = document.createElement('td');
        let tdOwnerEmail = document.createElement('td');
        let tdNumberTicketsBooked = document.createElement('td');
        let tdNumberTicketsTotal = document.createElement('td');
        let tdNomeEvento = document.createElement('td');
        let ThPoster = document.createElement('tr');
        contador = contador + 1
        /* tdOwnerName.setAttribute(type="datetime-local",type="datetime-local"); */

        /*         th.innerText = console.log(booking.lenght); */
        th.innerText = contador;
        tdOwnerName.innerText = booking.owner_name;
        tdOwnerEmail.innerText = booking.owner_email;
        tdNumberTicketsBooked.innerText = booking.number_tickets;
        tdNomeEvento.innerText = booking.event.name;              
        tdNumberTicketsTotal.innerText = booking.event.number_tickets;
        


        tabelabooking.appendChild(th);
        th.appendChild(tdOwnerName);
        th.appendChild(tdOwnerEmail);
        th.appendChild(tdNumberTicketsBooked);
        th.appendChild(tdNomeEvento);
        th.appendChild(tdNumberTicketsTotal);

        tdNumberTicketsTotal.appendChild(ThPoster);


        /* console.log(feriado.date.getDay); */

    })

}

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
};

fetch(endpointbooking + `${id}`, requestOptions)
    .then(response => response.json())
    .then(function (dados) {
        console.log(dados);
        listarBooking(dados);
    })
    .catch(error => console.log('error', error));


/* [
    {
      "_id": "623bcf860275f4bc2ca08cd3",
      "owner_name": "Vinicius",
      "owner_email": "email@email.com",
      "number_tickets": 10,
      "event": {
        "_id": "623bc253d2891ac70ab1cce4",
        "name": "Evento teste 2",
        "poster": "link da imagem",
        "attractions": [
          "Cantor 1"
        ],
        "description": "Evento incrivel",
        "scheduled": "2022-03-24T00:57:37.761Z",
        "number_tickets": 10,
        "created_at": "2022-03-24T00:58:59.646Z",
        "updated_at": "2022-03-26T02:58:17.214Z",
        "__v": 0
      },
      "created_at": "2022-03-24T01:55:18.919Z",
      "updated_at": "2022-03-24T01:55:18.919Z",
      "__v": 0
    }        
  ] */
