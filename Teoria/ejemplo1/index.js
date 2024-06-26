/*DOM
representa la estructura de HTML y puede ser modificado por un lenguaje de programacion */
/*maneras de capturar datos con id */
const txtn1 = document.getElementById("n1");            /*capturar dato*/
const txtn2 = document.getElementById("n2")             /*capturar dato*/
const respuesta = document.getElementById("resp");      /*capturar dato*/
const btncalcular = document.getElementById("calcular");/*capturar dato*/

btncalcular.addEventListener('click', calcular);/*Acttivar funcion con evento*/

function calcular(){/*Funcion de calculo*/
    const op1=parseFloat(txtn1.value);  /*Convertir eñemento string a float */
    const op2=parseFloat(txtn2.value);  /*Convertir eñemento string a float */

    let resp=op1+op2;                   /*Operación*/

    respuesta.innerText=resp;           /*Imprimir respuesta en el texto interno*/
    respuesta.style="color:red"         /*Modificar estilos */
}