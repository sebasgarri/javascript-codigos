function ingreso(){
    var persona=document.getElementById('nombre').value 
    document.getElementById('resultado').innerHTML="Bienvenido "+persona +" presione algun boton"
}
function llamar(){
    var pregunta=confirm("Desea ir a google?")
    if(pregunta){
        alert("te envio alli!")
        location.href="https://www.google.com/"
    }
    else{
        alert("Quiza en otro momento eliga otra opcion")
    }
}
    function instagram(){
        var mensaje=confirm("Desea ir a Instagram?")
        if(mensaje){
            alert("te envio alli!")
            location.href="https://www.instagram.com/"
        }
        else{
            alert("Quiza en otro momento eliga otra opcion") 
        }
    }
