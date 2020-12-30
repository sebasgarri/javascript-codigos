function suma(){
    var num1=parseInt(document.getElementById('numero1').value)
    var num2=parseInt(document.getElementById('numero2').value)
var para=document.createElement("p")
var suma=num1+num2

para.appendChild(suma)

    var elemento=document.getElementById('resultado')
    elemento.appendChild(para)
}