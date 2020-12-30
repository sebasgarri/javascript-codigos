function calcularsalario()
{
var horas=parseInt(document.getElementById("hora").value)
var tarifa=20000
var guaranies=" Gs."
var tarifa2=30000
var hsmin=40

if(horas>=40)
{
    salario=(hsmin*tarifa) + (horas - hsmin)* tarifa2
    document.getElementById('resultado').innerHTML=("Su salario es de: " +salario +guaranies)
    
}
else
{
    document.getElementById('resultado').innerHTML=("No se permiten valores menores a 40 ingrese de nuevo")
    
}
}