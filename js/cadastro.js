const novoEvento = async () => {
const nomeEvento = document.getElementById('nome');
const atracoesEvento = document.getElementById('atracoes');
const descricaoEvento = document.getElementById('descricao');
const dataEvento = document.getElementById('data');
const lotacaoEvento = document.getElementById('lotacao');


var raw = {
    "name": nomeEvento.value,
    "attractions": [atracoesEvento.value],
    "poster": "link da imagem",
    "description": descricaoEvento.value,
    "scheduled": dataEvento.value,
    "number_tickets": lotacaoEvento.value,      
};

var requestOptions = {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(raw),
    /* redirect: 'follow' */
};
const postarDados = await fetch("https://soundgarden-api.deta.dev/events", requestOptions)
.then(response => response.text())
.then(result => console.log(result))
.catch(error => console.log('error', error));};


/* const botaoCadastrar = document.getElementById('btnCadastro');
formularioCadastro */




const formularioCadastro = document.getElementById('formulario');

formularioCadastro.addEventListener('submit', function (event) {
    event.preventDefault();
    novoEvento();
    console.log(nomeEvento.value, atracoesEvento.value, descricaoEvento.value, dataEvento.value, lotacaoEvento.value);
});


/* formCEP.addEventListener("submit", async (form) => {
    form.preventDefault();
  
    feedbackBuscando();
  
    const resposta = await buscaCep(inputCEP.value);
  
    if (resposta?.message) {
      alert(resposta?.message);
    } else {
      estado.value = resposta?.state;
      cidade.value = resposta?.city;
      bairro.value = resposta?.neighborhood;
      rua.value = resposta?.street;
      
    }
  
    feedbackBuscando(false);
  }); */

/* {
  "name": "Evento teste 2",
  "poster": "link da imagem",
  "attractions": [
    "Cantor 1"
  ],
  "description": "Evento incrivel",
  "scheduled": "2022-03-24T00:57:37.761Z",
  "number_tickets": 10,
  "_id": "623e7e7de6e2db10816075c0",
  "created_at": "2022-03-26T02:46:21.918Z",
  "updated_at": "2022-03-26T02:46:21.918Z",
  "__v": 0
} */