function calcular(){
  var atleta1=parseInt(document.getElementById('numero1').value);
  var atleta2=parseInt(document.getElementById('numero2').value);
  var atleta3=parseInt(document.getElementById('numero3').value);
if(atleta1<atleta2 && atleta1<atleta3){
  document.getElementById('resultado').innerHTML="El Atleta 1 es el ganador con "+atleta1 +" Segundos";
}
else if(atleta2<atleta1 && atleta2<atleta3){
  document.getElementById('resultado').innerHTML="El Atleta 2 es el ganador con "+atleta2 +" Segundos";
}
else if(atleta3<atleta1 && atleta3<atleta2){
  document.getElementById('resultado').innerHTML="El Atleta 3 es el ganador con "+atleta3 +" Segundos";
}
while(atleta1>180 || atlet2>180 || atlet3>180){
  alert("No se permiten valores mayores a 180 segundos")
  return
}
}