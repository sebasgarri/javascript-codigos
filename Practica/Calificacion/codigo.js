function notas(){
    var numero=parseInt(document.getElementById('numero1').value)
    var descripcion = {  
        nota1 : "0-3 Muy deficiente",
        nota2 : "4-5 Insuficiente",
        nota3:"6-7 suficiente",
        nota4 : "8 Bien",
        nota5 : "9-10 Sobresaliente",
       
        }

        while(numero<0 || numero>10){
        alert("No se permiten valores menores a 0 o mayores a 10,ingrese nuevamente")
        return
        }
    if(numero==0 || numero==1 || numero==2 || numero==3){
    document.getElementById('resultado').innerHTML="El Alumno tuvo el siguiente puntaje <br/>"+descripcion.nota1
    }
    else if(numero==4 || numero==5 ){
        document.getElementById('resultado').innerHTML="El Alumno tuvo el siguiente puntaje <br/>"+descripcion.nota2

    }
    else if(numero==6 || numero==7 ){
    document.getElementById('resultado').innerHTML="El Alumno tuvo el siguiente puntaje <br/> "+descripcion.nota3
}
else if(numero==8){
    document.getElementById('resultado').innerHTML="El Alumno tuvo el siguiente puntaje <br/> "+descripcion.nota4
}
else if(numero ==9 || numero==10 ){
    document.getElementById('resultado').innerHTML="El alumno tuvo el siguiente puntaje <br/>"+descripcion.nota5
}
document.getElementById('descripcion').innerHTML="Los valores predeterminados son: <br/> "+descripcion.nota1+"<br>"+descripcion.nota2+"<br>"+descripcion.nota3+"<br>"+descripcion.nota4+"<br>"+descripcion.nota5+"<br>"
}