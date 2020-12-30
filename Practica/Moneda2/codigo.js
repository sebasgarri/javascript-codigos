function conversion(){
    var numero=parseInt(document.getElementById('dolares').value)
    var conversion=numero *6750
    document.getElementById('resultado').innerHTML="El resultado de la conversion a guaranies es: "+conversion
}