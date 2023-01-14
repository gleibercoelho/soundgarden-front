const endpointExcluir = "https://soundgarden-api.deta.dev/events/";
const formExcluirEvento = document.getElementById('excluirEventForm');

const nomeExcluirEvento = document.getElementById('nome');
const atracoesExcluirEvento = document.getElementById('atracoes');
const bannerExcluirEvento = document.getElementById('banner')
const descricaoExcluirEvento = document.getElementById('descricao');
const dataExcluirEvento = document.getElementById('data');
const lotacaoExcluirEvento = document.getElementById('lotacao');
const botaoExcluirEvento = document.getElementById('btnExcluir')

const params = new URLSearchParams(window.location.search);
const id = params.get("id");



formExcluirEvento.addEventListener('submit', (form) => {
    form.preventDefault();

 /*    const raw = {
        "name": nomeExcluirEvento.value,
        "poster": bannerExcluirEvento.value,
        "attractions": [atracoesExcluirEvento.value],
        "description": descricaoExcluirEvento.value,
        "scheduled": dataExcluirEvento.value,
        "number_tickets": lotacaoExcluirEvento.value,
    };
  
  */

var requestOptions = {
    method: 'DELETE',
    redirect: 'follow',
    /* body: JSON.stringify(raw), */
    headers: { "Content-Type": "application/json" }
  };


  
  fetch(endpointExcluir + `${id}`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))  
    .catch(error => console.log('error', error));
    
});


const obterEvento = async () => {
    


    const evento = await fetch(endpointExcluir + `${id}`)
        .then(response => response.json())     
   

    nomeExcluirEvento.value = evento.name;
    bannerExcluirEvento.value = evento.poster;
    atracoesExcluirEvento.value = evento.attractions;
    descricaoExcluirEvento.value = evento.description;
    dataExcluirEvento.value = evento.scheduled.split(".")[0];
    lotacaoExcluirEvento.value = evento.number_tickets;
}

obterEvento();