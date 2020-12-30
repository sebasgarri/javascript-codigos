function verificar(){
    var numero=parseInt(document.getElementById('numero1').value)
if(numero % 2 == 0)
{
document.getElementById('resultado').innerHTML="El Numero Ingresado es Par"
}
else 
{
    document.getElementById('resultado').innerHTML="El Numero Ingresado es impar"
}
}