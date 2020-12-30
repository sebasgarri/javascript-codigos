function saludo(){
    var persona=document.getElementById('nombre').value
    document.getElementById('saludar').innerHTML="Bienvenido "+persona +" Ingrese el tiempo de los atletas en segundos"
}
function calcular(){
    var atleta1=parseFloat(document.getElementById('numero1').value)
    var atleta2=parseFloat(document.getElementById('numero2').value)
    var atleta3=parseFloat(document.getElementById('numero3').value)

    if(atleta1<atleta2 && atleta1<atleta3){
        document.getElementById('resultado').innerHTML="El atleta 1 con tiempo "+atleta1 +" segundos es el ganador"

    }
else if(atleta2<atleta1 && atleta2<atleta3){
    document.getElementById('resultado').innerHTML="El atleta 2 con tiempo "+atleta2 +" segundos es el ganador"
}
else if(atleta3<atleta1 && atleta3<atleta2){
    document.getElementById('resultado').innerHTML="El atleta 3 con tiempo "+atleta3 +" segundos es el ganador"
}
}