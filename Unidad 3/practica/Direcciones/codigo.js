function  ingresar(){
    var nombres=document.getElementById('nombre').value
    document.getElementById('bienvenida').innerHTML="Bienvenido "+nombres +" A que pagina gustaria ir?"
}
function facebook(){
    var pregunta=confirm("Desea ir a facebook?")
    if(pregunta){
        alert("te envio alli!")
        location.href="https://www.facebook.com/"
    }
    else{
        alert("Quiza en otro momento,eliga otra opcion!")
    }
}
function google(){
    var pregunta2=confirm("Desea ir a Google?")
    if(pregunta2){
        alert("te envio alli!")
        location.href="https://www.google.com/"
    }
    else{
        alert("Quiza en otro momento,eliga otra opcion!")
    }
}

function instagram(){
    var pregunta3=confirm("Desea ir a Instagram?")
    if(pregunta3){
        alert("Te envio alli!")
        location.href="https://www.instagram.com/"
    }
    else{
        alert("Quiza en otro momento,elija otra opcion!")
    }
    
}