function convertir()
{
    var numero=parseInt(document.getElementById('guaranies').value)
    var conversion=numero/6750
    document.getElementById('resultado').innerHTML="La conversion es: "+conversion
}
