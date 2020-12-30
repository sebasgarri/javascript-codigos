function calcular(){
    var persona=document.getElementById('nombre').value
    var edad=parseInt(document.getElementById('numero').value)

if(edad>=18){
    document.getElementById('resultado').innerHTML="El nombre ingresado es "+persona +" con  "+edad +" años y esta habilitado para sacar licencia"

}
else if(edad<18){
    document.getElementById('resultado').innerHTML=" El nombre ingresado es "+persona +" con "+edad +" años, no esta habilitado para sacar licencia"
}
}