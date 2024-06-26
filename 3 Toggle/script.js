let toggleBtn = document.querySelector('.toggleBtn'); /*El puntito indica que es una clase */
let container = document.querySelector('.container');

/*Esta funcion genera un evento*/
toggleBtn.onclick=function(){
    container.classList.toggle('active') /*Reconoce el toggle de la lista de clases para 
                                           generar el on/off de manera automatica*/

}