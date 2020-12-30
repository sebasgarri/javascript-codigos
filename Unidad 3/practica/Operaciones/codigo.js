
function suma(){
    var primero=parseInt(document.getElementById('numero1').value)
    var segundo=parseInt(document.getElementById('numero2').value)
    var suma=primero+segundo
    document.getElementById('resultado').innerHTML="El resultado de la suma es "+suma
}
function resta(){
    var primero=parseInt(document.getElementById('numero1').value)
    var segundo=parseInt(document.getElementById('numero2').value)
    var resta=primero-segundo
    document.getElementById('resultado').innerHTML="El resultado de la resta es "+resta
}
function multiplicacion(){
    var primero=parseInt(document.getElementById('numero1').value)
    var segundo=parseInt(document.getElementById('numero2').value)
    var multi=primero*segundo
    document.getElementById('resultado').innerHTML="El resultado de la multiplicacion es "+multi
}
function dividir(){
    var primero=parseInt(document.getElementById('numero1').value)
    var segundo=parseInt(document.getElementById('numero2').value)
    var division=primero/segundo
    document.getElementById('resultado').innerHTML="El resultado de la division es "+division
}