var miElemento = document.getElementById("byId");
document.getElementById("demoId").innerHTML =
"El texto obtenido de byId es " +
miElemento.innerHTML;
var x = document.getElementsByTagName("p");
document.getElementById("demoTag").innerHTML =
'El texto del tercer parrafo es paragraph (index 2) es: ' +
x[2].innerHTML;
var y =
document.getElementsByClassName("byClassName");
document.getElementById("demoClassName").innerHTML =
'El texto del quinto parrafo de (index 0)'
class="byClassName" es: ' + y[0].innerHTML"
var z =
document.querySelectorAll("p.byQuerySelector");
document.getElementById("demoQuerySelector").inne
rHTML =
'El texto del septimo parrafo de (index 0)
class="byQuerySelector" es: ' + z[0].innerHTML
