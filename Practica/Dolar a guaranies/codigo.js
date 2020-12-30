function calcular(){
    var cantidad=parseInt(document.getElementById('cantidad').value);
    var calcular=cantidad*7000
    document.getElementById('resultado').innerHTML="la conversion a guaranies es: "+calcular +" Gs."
}