function primo(){
    var numero=parseInt(document.getElementById('numero1').value)

if(numero==9 || numero%3==0 ){
    document.getElementById('resultado').innerHTML="El Numero Ingresado no es primo " 
}
else if(numero==7|| numero==5 ||numero==3  ||numero==2){
    document.getElementById('resultado').innerHTML="El Numero Ingresado es primo "
}

    else if(numero%2!=0 &&  numero%4!=0 && numero%5!=0 && numero%7!=0 )
    
    {
        document.getElementById('resultado').innerHTML="El Numero Ingresado es primo "
    }
   
    else{
        document.getElementById('resultado').innerHTML="El Numero Ingresado no es primo " 
    }
}