function calcular(){
    var fecha = new Date(); //Obtiene un objeto fecha actual.
    var dia;
    var vardia = fecha.getDay();    //getDay() devuelve el dia de la semana.(0-6).
    switch (vardia) { //Algoritmo para calcular el dia según el número.
        case 0:
            dia = "Domingo";
            break;
        case 1:
            dia = "Lunes";
            break;
        case 2:
            dia = "Martes";
            break;
        case 3:
            dia = "Miercoles";
            break;
        case 4:
            dia = "Jueves";
            break;
        case 5:
            dia = "Viernes";
            break;
        case 6:
            dia = "Sabado";
            break;
    }

    var mes;
    //Algoritmo para calcular el mes según el número.
    switch (fecha.getMonth() + 1) { //getMonth() devuelve el mes (0-11).
        case 1:
            mes = "Enero";
            break;
        case 2:
            mes = "Febrero";
            break;
        case 3:
            mes = "Marzo";
            break;
        case 4:
            mes = "Abril";
            break;
        case 5:
            mes = "Mayo";
            break;
        case 6:
            mes = "Junio";
            break;
        case 7:
            mes = "Julio";
            break;
        case 8:
            mes = "Agosto";
            break;
        case 9:
            mes = "Septiembre";
            break;
        case 10:
            mes = "Octubre";
            break;
        case 11:
            mes = "Noviembre";
            break;
        case 12:
            mes = "Diciembre";
            break;
    }

    var diames = (fecha.getDate());   //getDate() devuelve el dia(1-31).
    var ano = fecha.getFullYear();  //getFullYear() devuelve el año(4 dígitos).
    var hora = fecha.getHours();    //getHours() devuelve la hora(0-23).
    var min = fecha.getMinutes();   //getMinutes() devuelve los minutos(0-59).
    if ((min >= 0) && (min < 10)) {    //Algoritmo para añadir un cero cuando el min tiene 1 cifra.
        min = "0" + min;
    }
    var salida = "Hoy es " + dia + ", " + diames + " de ";
    var salida = salida + mes + " de " + ano + " y son las ";
    var salida = salida + hora + ":" + min + " horas";
    document.getElementById('resultado').innerHTML=salida


}