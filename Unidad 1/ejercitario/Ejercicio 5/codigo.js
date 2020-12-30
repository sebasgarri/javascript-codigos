var persona = {  //aca se declara el objeto
    nombre : "Sebastian",
    apellido : "Garrigoza",
    edad:"24",
    Direccion : "San lorenzo",
    telefono : "0986-369-166"
    }

document.getElementById("demo").innerHTML =// Aca se imprime en pantalla el resultado del objeto
persona.nombre + " de apellido " +
persona.apellido+" tiene "+
persona.edad + " años y vive en "+
persona.Direccion + " y su numero de telefono es " +
persona.telefono
