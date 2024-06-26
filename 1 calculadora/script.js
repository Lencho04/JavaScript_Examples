const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item)=>{
    item.onclick=()=>{
        if(item.id=="clear"){ /*Boton limpiar pantalla */
            display.innerText="";
        }
        else if(item.id=="backspace"){ /*Boton de borrado */
            let string = display.innerText.toString();/*Conversión de datos a string */
            display.innerText=string.substr(0,string.length-1);
        }
        else if(display.innerText !="" && item.id=="equal"){
            display.innerText=eval(display.innerText);
        }
        else if(display.innerText=="" && item.id=="equal"){
            display.innerText="Null";
            setTimeout(()=>(display.innerText=""),2000);/*Establece un tiempo de espera */
        }                                               /*para ejecutar esta parte del codigo */
        else{
            display.innerText += item.id; /*Adjunta los caracteres por medio de su id */
        }
    };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
let isDark=true;
themeToggleBtn.onclick=()=>{
    calculator.classList.toggle("dark"); /*La classlist afecta todo toggle que lleven como clase a dark*/
    themeToggleBtn.classList.toggle("active");/*Vuelve al tema claro */
    isDark = !isDark;
};