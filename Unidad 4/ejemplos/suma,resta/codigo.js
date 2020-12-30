function sumando(){
    var num1=parseInt(document.getElementById('numero1').value);
    var num2=parseInt(document.getElementById('numero2').value);
    var suma=num1+num2;
    document.getElementById('resultado').innerHTML="El Resultado de sumar "+num1 +" con "+num2 +" es "+suma;
}
function restando(){
    var num1=parseInt(document.getElementById('numero1').value);
    var num2=parseInt(document.getElementById('numero2').value);
    var resta=num1-num2;
    document.getElementById('resultado').innerHTML="El Resultado de restar "+num1 +" con "+num2 +" es "+resta;
}
function multiplicando(){
    var num1=parseInt(document.getElementById('numero1').value);
    var num2=parseInt(document.getElementById('numero2').value);
    var multi=num1*num2;
    document.getElementById('resultado').innerHTML="El Resultado de multiplicar "+num1 +" con "+num2 +" es "+multi;
}
function dividendo(){
    var num1=parseInt(document.getElementById('numero1').value);
    var num2=parseInt(document.getElementById('numero2').value);
    var division =num1/num2;
    document.getElementById('resultado').innerHTML="El Resultado de dividir "+num1 +" con "+num2 +" es "+division;
}