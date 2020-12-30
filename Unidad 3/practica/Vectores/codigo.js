for(var i =0 ; i<5;i++){
    var vector=prompt("Ingrese un elemento ", "")
    var vector=[numero[i=0],numero[i=1],numero[i=2],numero[i=3],numero[i=4]]
}
function posicion(){
    var numero2=prompt("Ingrese un elemento ", "")
    if (numero2==numero[i=0]){
        document.getElementById('resultado').innerHTML="El elemento seleccionado es "+numero[i=0]+" y esta seleccionado en la posicion 0" 
    }
    else if(numero2==numero[i=1]){
        document.getElementById('resultado').innerHTML="El elemento seleccionado es "+numero[i=1]+" y esta seleccionado en la posicion 1"

    }
    else if(numero2==numero[i=2]){
        document.getElementById('resultado').innerHTML="El elemento seleccionado es "+numero[i=2]+" y esta seleccionado en la posicion 2"
    }
    else if(numero2==numero[i=3]){
        document.getElementById('resultado').innerHTML="El elemento seleccionado es "+numero[i=3]+" y esta seleccionado en la posicion 3"
    }
    else if(numero2==numero[i=4]){
        document.getElementById('resultado').innerHTML="El elemento seleccionado es "+numero[i=4]+" y esta seleccionado en la posicion 4"
    }

    document.getElementById('lista').innerHTML="El vector resultante es: "+"<br/>"+vector
}