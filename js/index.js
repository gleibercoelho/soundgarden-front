
const getEvents = async () => {
    alert("Página carregada");
    const events = await fetch('${BASE_URL}/events').then((result) => result.json());
    console.log(events);
};


getEvents();


