function suma(){
/* El document.getElementById.value obtiene el valor de los inputs
del html mediante su id correspondiente*/
var x=parseInt(document.getElementById("numero1").value)
//necesariamente  se debe convertir el valor obtenido a numero con parseInt
var y= parseInt(document.getElementById("numero2").value)
var z=x+y
document.getElementById("resultado").innerHTML=z
}