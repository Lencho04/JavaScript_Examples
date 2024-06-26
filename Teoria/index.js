const txt = document.getElementById("resp");
async function obtenerdata(){
    await fetch("http://127.0.0.1:5500/Teoria/data.json")
    .then (Response=>Response.json())
    .then(json=> console.log(json))
    .catch(error=>console.log("Solicitud fallida", error))
}

obtenerdata();