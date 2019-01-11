const codificar=document.getElementById("codificar");
const decodificar=document.getElementById("decodificar");


codificar.addEventListener("click",cod);
function cod(){
    bienvenida.classList.add("ocultar");
    boxcod.classList.remove("ocultar");
    
}

decodificar.addEventListener("click",deco);
function deco(){
    bienvenida.classList.add("ocultar");
    boxendcod.classList.remove("ocultar");

}
