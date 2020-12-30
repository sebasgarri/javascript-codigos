document.getElementById('mensaje').innerHTML="Ver info aqui"
const x=document.getElementById('mensaje')
x.addEventListener("mouseover",calcular)

function calcular(){
    var limpiar=""
    document.getElementById('mensaje').innerHTML=limpiar 
    document.getElementById('resultado').innerHTML="Este es el curso de diseño web javascript"
}