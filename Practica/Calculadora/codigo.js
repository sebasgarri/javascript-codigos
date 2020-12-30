function suma(){
    var numero1=parseInt(document.getElementById('numero1').value)
    var numero2=parseInt(document.getElementById('numero2').value)
    var suma=numero1+numero2
    document.getElementById('resultado').innerHTML=+suma
}
function resta(){
    var numero1=parseInt(document.getElementById('numero1').value)
    var numero2=parseInt(document.getElementById('numero2').value)
    var resta=numero1-numero2
    document.getElementById('resultado').innerHTML=+resta
}
function multi(){
    var numero1=parseInt(document.getElementById('numero1').value)
    var numero2=parseInt(document.getElementById('numero2').value)
    var multi=numero1*numero2
    document.getElementById('resultado').innerHTML=+multi
}
function divi(){
    var numero1=parseInt(document.getElementById('numero1').value)
    var numero2=parseInt(document.getElementById('numero2').value)
    var divi=numero1/numero2
    document.getElementById('resultado').innerHTML=+divi
}