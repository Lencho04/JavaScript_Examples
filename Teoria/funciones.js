/*funciones*/
/*Let sirve para declarar variables dentro del mismo bloque, y no se puede redeclarar
var sirve para declarar variables globales */

let resultado="Capuchino";
function cafetera(ingrediente1){
    if(ingrediente1=="leche"){
        return resultado;
    }
}

var tasa = cafetera("leche");
console.log(tasa);