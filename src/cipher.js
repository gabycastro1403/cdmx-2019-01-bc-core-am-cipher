

window.cipher = {
  
  
  encode:(offset, str) =>{ 
    let nuevoCifrado="";
    let cleanOffset=parseInt(offset);

    for(let i=0; i<str.length; i++){
            let letraAscii=str.charCodeAt(i);
            if(letraAscii>=65 && letraAscii<= 90){
            let formula=(letraAscii-65+cleanOffset)%26+65;
            let resultado=String.fromCharCode(formula);
            nuevoCifrado+=resultado;

        }else if(letraAscii>=97 && letraAscii<=122){
            let letraAscii=str.charCodeAt(i);
            let formula=(letraAscii-97+cleanOffset)%26+97;
            let resultado=String.fromCharCode(formula);
            nuevoCifrado+=resultado;
        }else {
            let resultado=String.fromCharCode(letraAscii);
            nuevoCifrado+=resultado;
        }
        

    }
        return nuevoCifrado ;


  },

      
   


 
   
  decode:(offset, str) =>{
    let nuevoDescifrado="";
    let cleanOffset=parseInt(offset);

    for(let i=0; i<str.length; i++){
            let letraAscii=str.charCodeAt(i);
            if(letraAscii>=65 && letraAscii<= 90){
            let formula=(letraAscii+65-cleanOffset)%26+65;
            let resultado=String.fromCharCode(formula);
            nuevoDescifrado+=resultado;

        }else if(letraAscii>=97 && letraAscii<=122){
            let letraAscii=str.charCodeAt(i);
            let formula=(letraAscii-122-cleanOffset)%26+122;
            let resultado=String.fromCharCode(formula);
            nuevoDescifrado+=resultado;
        }else {
            let resultado=String.fromCharCode(letraAscii);
            nuevoDescifrado+=resultado;
        }

        
        

    }
        return nuevoDescifrado;


 },


};
