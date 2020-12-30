function calcular(){
    var atleta1=parseInt(document.getElementById('corredor1').value);
    var atleta2=parseInt(document.getElementById('corredor2').value);
    var atleta3=parseInt(document.getElementById('corredor3').value);

    if(atleta1<atleta2 && atleta1<atleta3){
        document.getElementById('resultado').innerHTML="El primer lugar es para el corredor1"
    }
    else if(atleta2<atleta1 && atleta2<atleta3){
        document.getElementById('resultado').innerHTML="El primer lugar es para el corredor2"
    }
    else if(atleta3<atleta2 && atleta3<atleta1){
        document.getElementById('resultado').innerHTML="El primer lugar es para el corredor3"
    }
}
