const codificar=document.getElementById("codificar");
const regresar =document.getElementById("regresar");
let offset=document.getElementById("numoffset").value;
const str=document.getElementById("msj").value;
const aceptarValue=document.getElementById("aceptar");
const bienvenida=document.getElementById("bienvenida");
const boxcod=document.getElementById("boxcod");

aceptarValue.addEventListener("click",()=>{
    console.log(offset);
    console.log(str);
   let resultadoCifrado = window.cipher.encode(offset, str);
   console.log(resultadoCifrado)

   // pintar - document.geteem
    document.getElementById("resultado").innerHTML=`este es tu msj ${resultadoCifrado}`;
});

codificar.addEventListener("click",() =>{
    bienvenida.classList.add("ocultar");
    boxcod.classList.remove("ocultar");
    
});



regresar.addEventListener("click",() =>{
    boxcod.classList.add("ocultar");
    bienvenida.classList.remove("ocultar");

});


