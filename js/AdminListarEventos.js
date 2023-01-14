const endpointListarEventos = "https://soundgarden-api.deta.dev/events";
const tabelaListaEventos = document.getElementById('tabelaCorpo');
const botesAcao = document.getElementById('botoesAcao');

function popularFeriados(feriadosDados){
    tabelaListaEventos.innerHTML = '';
    feriadosDados.forEach(feriado =>{
        let th = document.createElement('tr');
        let tdData = document.createElement('td');
        let tdTitulo = document.createElement('td');
        let tdAtracoes = document.createElement('td');
        let TdAcoes = document.createElement('th');
        let ThPoster = document.createElement('tr');

/*         th.innerText = console.log(feriado.lenght); */
        th.innerText = feriado._id;
        tdData.innerText = feriado.scheduled;
        tdTitulo.innerText = feriado.name;
        tdAtracoes.innerText= feriado.attractions;
        TdAcoes.innerText = botesAcao.value.indexof("td");
        

        tabelaListaEventos.appendChild(th);
        th.appendChild(tdData);
        th.appendChild(tdTitulo);
        th.appendChild(tdAtracoes);
        th.appendChild(TdAcoes);
        TdAcoes.appendChild(ThPoster);

        
        /* console.log(feriado.date.getDay); */

    })

}


var requestOptions = {
    method: 'GET',
    /*  redirect: 'follow', */
    headers: { "Content-Type": "application/json" }
};

fetch(endpointListarEventos, requestOptions)
    .then(response => response.json())
    .then(function(dados){
        console.log(dados);
        popularFeriados(dados);
    })
    .catch(error => console.log('error', error));

/*  console.log([response]) */



/* {
    "_id": "623bc253d2891ac70ab1cce4",
    "name": "Evento teste",
    "poster": "link da imagem",
    "attractions": [
      "Cantor 1"
    ],
    "description": "Evento incrivel",
    "scheduled": "2022-03-24T00:57:37.761Z",
    "number_tickets": -20,
    "created_at": "2022-03-24T00:58:59.646Z",
    "updated_at": "2022-03-24T01:56:25.608Z",
    "__v": 0
  }
*/
/* const raw = {
    "name": innerHTML,
    "poster": "link da imagem",
    "attractions": [atracoesEditarEvento.value],
    "description": descricaoEditarEvento.value,
    "scheduled": dataEditarEvento.value,
    "number_tickets": lotacaoEditarEvento.value,}  */