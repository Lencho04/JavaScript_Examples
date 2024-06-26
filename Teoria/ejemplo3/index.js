/*Tareas asincronas: las tareas esperan a que termine un proceso para ejecutar su tarea.
es una tarea que espera datos*/

async function obtenerdata(){
    /*Un await no funciona si la funcion no es asincrona */
    const response = await fetch("https://api.github.com/repos/hadley/ggplot2/issues");

    const json = await response.json();
    console.log(json);
}

obtenerdata();

/*Fetch y json rescatar informacion */
// const txt = document.getElementById("resp");
// async function obtenerdata(){
//     await fetch("http://127.0.0.1:5500/Teoria/data.json")
//     .then (Response=>Response.json())
//     .then(json=> console.log(json))
//     .catch(error=>console.log("Solicitud fallida", error))
// }

// obtenerdata();