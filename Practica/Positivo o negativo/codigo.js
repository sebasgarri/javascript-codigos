function comprobar(){
    var numero=parseInt(document.getElementById('numero1').value)
    if(numero>0){
        document.getElementById('resultado').innerHTML="El Numero"+numero+" Es Positivo" 
    }
    else if(numero<0){
        document.getElementById('resultado').innerHTML="El Numero "+numero+ " Es Negativo"
    }
    else if(numero==0){
        document.getElementById('resultado').innerHTML="El Numero es igual a cero"
    }
}