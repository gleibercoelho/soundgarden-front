
const getEvents = async () => {
    alert("Página carregada");
    const events = await fetch('${BASE_URL}/events').then((result) => result.json());
    console.log(events);
};


getEvents();

function abrirmodal(carregarmodal){
    let modal = document.getElementById(carregarmodal);
     modal.style.display = 'block';
    }
    
    
    function fechar(fecharmodal){
    let modalfechar = document.getElementById(fecharmodal);
     modalfechar.style.display = 'none';
    }

