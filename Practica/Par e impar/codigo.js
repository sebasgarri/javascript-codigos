function comprobar(){
    var numero=parseInt(document.getElementById('numero1').value)
    while(numero<=0){
        alert("Ingrese un numero mayor a cero")
        return
    }

    if(numero%2==0){
        document.getElementById('resultado').innerHTML="El Numero "+numero+" Es Par"
    }
    else{
        document.getElementById('resultado').innerHTML="El Numero "+numero+" Es Impar"
    }

}
