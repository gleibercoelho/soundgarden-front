/* const novoEvento = async () => { */
const nomeEditarEvento = document.getElementById('nome');
const atracoesEditarEvento = document.getElementById('atracoes');
const bannerEditarEvento = document.getElementById('banner')
const descricaoEditarEvento = document.getElementById('descricao');
const dataEditarEvento = document.getElementById('data');
const lotacaoEditarEvento = document.getElementById('lotacao');
const formEditarEvento = document.getElementById('formEditar');
const botaoEditarEvento = document.getElementById('btnEditar')
const endpointEditarEvento = "https://soundgarden-api.deta.dev/events/"



const carregando = (loading = true) => {
    nomeEditarEvento.disabled = loading;
    atracoesEditarEvento.disabled = loading;
    bannerEditarEvento.disabled = loading;
    descricaoEditarEvento.disabled = loading;
    dataEditarEvento.disabled = loading;
    dataEditarEvento.disabled = loading;
    lotacaoEditarEvento.disabled = loading;
    botaoEditarEvento.disabled = loading;
}

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const raw = {
    "name": nomeEditarEvento.value,
    "poster": "link da imagem",
    "attractions": [atracoesEditarEvento.value],
    "description": descricaoEditarEvento.value,
    "scheduled": dataEditarEvento.value,
    "number_tickets": lotacaoEditarEvento.value,
}

formEditarEvento.addEventListener('submit', (form) => {
    form.preventDefault();
    carregando();

   

    const response = fetch(endpointEditarEvento + `${id}`, {
        method: 'PUT',
        body: JSON.stringify(raw),
        /* redirect: 'follow', */
        headers: { "Content-Type": "application/json" },
    }).then((result) => result.json());
    console.log(response)
    console.log(nomeEditarEvento.value, atracoesEditarEvento.value, descricaoEditarEvento.value, dataEditarEvento.value, lotacaoEditarEvento.value);
});

const obterEvento = async () => {
    carregando();


    const evento = await fetch(endpointEditarEvento + `${id}`)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    carregando(false);

    nomeEditarEvento.value = evento.name;
    bannerEditarEvento.value = evento.poster;
    atracoesEditarEvento.value = evento.attractions;
    descricaoEditarEvento.value = evento.description;
    dataEditarEvento.value = evento.scheduled/* .split(".")[0] */;
    lotacaoEditarEvento.value = evento.number_tickets;
}

obterEvento();

/* {
    "name": "Evento teste 2",
        "poster": "link da imagem",
            "attractions": [
                "Cantor 1"
            ],
                "description": "Evento incrivel",
                    "scheduled": "2022-03-24T00:57:37.761Z",
                        "number_tickets": 10
}
 */
/* var raw = {
    "name": nomeEvento.value,
    "attractions": [atracoesEvento.value],
    "poster": "link da imagem",
    "description": descricaoEvento.value,
    "scheduled": dataEvento.value,
    "number_tickets": lotacaoEvento.value,
}
var requestOptions = {
    method: 'PUT',
    body: raw,
    redirect: 'follow',
    headers: {"Content-Type": "application/json"},
};

fetch("soundgarden-api.deta.dev/events/623bc253d2891ac70ab1cce4", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
/* 
{
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
                                    "updated_at": "2022-03-26T03:04:25.615Z",
                                        "__v": 0
}
 */
/* let params = new IRLSearchParams('q=node&page=2');
params.get('q');
params.get('page'); */
