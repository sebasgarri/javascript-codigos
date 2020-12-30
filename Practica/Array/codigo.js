function meses()
{
    var meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
var lista=document.getElementById("lista-meses")
meses.forEach(function(data,i){
var linew= document.createElement("li")
var contenido=document.createTextNode(mes[i])
lista.appendChild(linew)
linew.appendchild(contenido)
}
)
}