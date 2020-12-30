function celsius(){
    var numero=parseInt(document.getElementById("numero1").value)
    var conversion=(numero-32)/1.8
    document.getElementById('resultado').innerHTML="El resultado de la conversion a celsius es: "+conversion
}


