

window.cipher = {
  
  
  encode:(offset, str) =>{ 
    let nuevoCifrado="";
    let cleanOffset=parseInt(offset);
      
   let mayuscula= str.toUpperCase();
    for(let i=0; i<mayuscula.length; i++){
        let letraAscii=mayuscula.charCodeAt(i);
        let formula=(letraAscii-65+cleanOffset)%26+65;
         let resultado=String.fromCharCode(formula);
         nuevoCifrado+=resultado;
    }
         return nuevoCifrado;
        


  },
   
  decode:(offset, str) =>{
    let nuevoDescifrado="";
    let cleanOffset=parseInt(offset);

    let mayuscula= str.toUpperCase();
    for(let i=0; i<mayuscula.length; i++){
        let letraAscii=mayuscula.charCodeAt(i);
        let formula=(letraAscii+65-cleanOffset)%26+65;
         let resultado=String.fromCharCode(formula);
         nuevoDescifrado+=resultado;

    }
    return nuevoDescifrado;


  },


};
