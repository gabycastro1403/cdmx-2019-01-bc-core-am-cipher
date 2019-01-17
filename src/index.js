const codificar=document.getElementById("codificar");
const regresar =document.getElementById("regresar");
let numoffset=document.getElementById("numoffset");
let msj=document.getElementById("msj");
const aceptarValue=document.getElementById("aceptar");
const bienvenida=document.getElementById("bienvenida");
const boxcod=document.getElementById("boxcod");
const decodificar=document.getElementById("decodificar");


aceptarValue.addEventListener("click",()=>{
    let str= msj.value;
    let offset=numoffset.value;
   let resultadoCifrado = window.cipher.encode(offset, str);
   // pintar - document.geteem
    document.getElementById("resultado").innerHTML=`este es tu msj ${resultadoCifrado}`;
});

decodificar.addEventListener("click",() =>{
    let str=msj.value;
    let offset=numoffset.value;
    let resultadoDescifrado= window.cipher.decode(offset, str);
    document.getElementById("resultadodes").innerHTML=`este es tu msj descifrado${resultadoDescifrado}`;

});

codificar.addEventListener("click",() =>{
    bienvenida.classList.add("ocultar");
    boxcod.classList.remove("ocultar");
    
});



regresar.addEventListener("click",() =>{
    boxcod.classList.add("ocultar");
    bienvenida.classList.remove("ocultar");

});


