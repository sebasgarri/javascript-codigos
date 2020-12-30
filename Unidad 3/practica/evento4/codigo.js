const x=document.getElementById("clicklt")
const y=document.getElementById("hoverpara")

x.addEventListener("click",RespondClick)
y.addEventListener("mouseover",Respondmouseover)
y.addEventListener("mouseout",Respondmouseout)

function Respondmouseover(){
    document.getElementById("effect").innerHTML+="Mouseover Event-encima del texto"+"<br>"

}
function Respondmouseout(){
document.getElementById('effect').innerHTML+="Mouseout Event-fuera del texto"+"<br>"
}
function RespondClick(){
    document.getElementById("effect").innerHTML+="Evento Click"+"<br>"
}