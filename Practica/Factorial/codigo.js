function factorial(){
var numero=parseInt(document.getElementById('numero1').value)
var total=1
for(var i=1;i<=numero;i++){
    total=total*i
    document.getElementById('resultado').innerHTML="El Factorial de "+numero+" Es "+total
}
while(numero<0)
{
alert("No se permite un numero negativo,ingrese de vuelta")
return
}


}