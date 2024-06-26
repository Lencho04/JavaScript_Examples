const respuesta=document.getElementById("resp");
const btnejecutar=document.getElementById("ejecuta");

btnejecutar.addEventListener("click", iniciar);

let frutas= ["manzana", "mango", "fresa", "pera"]
function iniciar(){
    /*Mostrar el ultimo dato de un array */
    // respuesta.innerText=frutas[frutas.length-1];
    /*Recorrer un array */
    frutas.forEach(function(item,index,array){
        respuesta.innerText=array;
    });
}