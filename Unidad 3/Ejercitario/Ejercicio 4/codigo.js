function dividir(){
    var numero=parseInt(document.getElementById('numero1').value)
    var numero2=parseInt(document.getElementById('numero2').value)
    var division=numero/numero2
    while(numero2==0){
        alert("division por 0 no existe,ingrese otro valor para el divisor")
        return
    }
    document.getElementById('resultado').innerHTML="El Resultado de dividir "+numero+" Entre "+numero2+" Es igual a "+division
}