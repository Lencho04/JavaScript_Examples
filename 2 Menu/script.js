const menuToggle= document.querySelector('.menuToggle'); /*Capturar elementos en una constante para su utilizacion en JS */
const navigation= document.querySelector('.navigation');

/*Dar funcionalidad a la pagina */
/*Controlar estilos */
menuToggle.onclick= function(){
    navigation.classList.toggle('open');/*Open es una clase que se crea en JS */
}

/*Capturamos los datos de HTML en este caso con las etiquetas que se asignaron. */
const list = document.querySelectorAll('.list');
/*Esta funcion recorre el active como un array hacia los otros elementos que 
seleccionemos. siempre y cuando sean de la clase list*/
function activarLink(){
    list.forEach((item)=>
        item.classList.remove('active')) /*Se remueve toda clase que tenga active */
    this.classList.add('active') /*Se le asigna el active al objeto seleccionado */
}
/* */
list.forEach((item)=>
    item.addEventListener('click', activarLink)
)