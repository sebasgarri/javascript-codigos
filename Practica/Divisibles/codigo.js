function division(){
var numero=parseInt(document.getElementById('numero1').value)

if(numero % 2==0)

{
document.getElementById('resultado').innerHTML="El numero " +numero + " es divisible con 2 "

}
if(numero % 3==0){
    document.getElementById('resultado').innerHTML="El numero " +numero + " es divisible con 3 "
}
else if(numero % 5==0){
    document.getElementById('resultado').innerHTML="El numero " +numero + " es divisible con 5 "
}
else if(numero % 7==0){
    document.getElementById('resultado').innerHTML="El numero " +numero + " es divisible con 7 "

}
if(numero % 2==0  && numero % 5 ==0 ){
    
    document.getElementById('resultado').innerHTML="El numero " +numero + " es divisible con 2 y 5 "

}
if(numero % 2==0  && numero % 3 ==0 ){
    
    document.getElementById('resultado').innerHTML="El numero " +numero + " es divisible con 2 y 3 "

}

else if(numero % 3==0  && numero % 5 ==0  ){
    
    document.getElementById('resultado').innerHTML="El numero " +numero + " es divisible con 3 y 5 "

}
if(numero % 3==0  && numero % 5 ==0   && numero % 7 ==0  ){
    
    document.getElementById('resultado').innerHTML="El numero " +numero + " es divisible con 3 , 5 y 7 "

}
else if(numero % 3==0  && numero % 7 ==0  ){

    document.getElementById('resultado').innerHTML="El numero " +numero + " es divisible con 3 y 7 "
}
else if(numero % 5==0  && numero % 7 ==0  ){

    document.getElementById('resultado').innerHTML="El numero " +numero + " es divisible con 5 y 7 "
}
if(numero % 2==0  && numero % 3 ==0   && numero % 5 ==0  ){
    
    document.getElementById('resultado').innerHTML="El numero " +numero + " es divisible con 2 , 3 y 5 "

}
}