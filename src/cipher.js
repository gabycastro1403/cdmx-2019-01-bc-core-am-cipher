

window.cipher = {
  
  
  encode:(offset, str) =>{ 
    let nuevoCifrado="";
    cleanOffset=parseInt(offset);
    console.log(str);
    // str= str.value;
    
   let mayuscula= str.toUpperCase();
    for(let i=0; i<mayuscula.length; i++){
        let letraAscii=mayuscula.charCodeAt(i);
        let formula=(letraAscii-65+cleanOffset)%26+65;
         let resultado=String.fromCharCode(formula);
         nuevoCifrado+=resultado;
    }
         return nuevoCifrado;
        // document.getElementById("resultado").innerHTML="Tus respuestas correctas son " + nuevoCifrado;


  },
  decode:() =>{

  },


};
