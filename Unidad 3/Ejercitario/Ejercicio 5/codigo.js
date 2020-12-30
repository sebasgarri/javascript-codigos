document.getElementById('bienvenida').innerHTML="Pase el cursor encima de este texto"
const x=document.getElementById('bienvenida')
x.addEventListener("mouseout",imagenes)
    function imagenes(){
  var elemento= document.getElementById('imagen')
  elemento.src = "javascript.png"
}