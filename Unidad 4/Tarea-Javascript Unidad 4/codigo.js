//Utilizacion de funciones
function validarEntero(valor) {
    valor = parseInt(valor)
        if (isNaN(valor)) {
            return ""
        } else {
            return valor
        }
}
//Utilizacion de funciones, variables, DOM
function validarFormulario() {
    var verificar = true;
    var expRegNombres = /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ]{1,}([\s][A-Za-zÁáÉéÍíÓóÚúÛüÑñ]{1,})+$/;
    var expRegEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    var expRegUrl = /^(http|https|ftp)+\:+\/\/+(www\.|)+[a-z0-9\-\.]+([a-z\.]|)+\.[a-z]{2,4}$/i;
    var expRegTelefono = /^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/
    var formulario = document.getElementById("formulario");
    var nombres = document.getElementById("nombres");
    var direccion = document.getElementById("direccion");
    var email = document.getElementById("email");
    var webSite = document.getElementById("web-site");
    var telefono = document.getElementById("telefono");
    var comentario = document.getElementById("comentario");

    edad = document.formulario.edad.value
    edad = validarEntero(edad)
    document.formulario.edad.value = edad
    if (!nombres.value) {
        alert("Escriba su nombre y apellido por favor.");
        nombres.focus();
        verificar = false;
        return false;
    }
    else if (nombres.value.split(" ").length < 2) {
        alert("Escriba su nombre completo por favor.");
        nombres.focus();
        verificar = false;
        return false;
    }
    else if (!expRegNombres.exec(nombres.value)) {
        alert("Este campo admite letras de la a-zA-Z, y no admite espacios en blanco al final.");
        nombres.focus();
        verificar = false;
        return false;
    }
    else if (edad=="") {
        alert("Tiene que introducir un número entero en su edad.")
        document.formulario.edad.focus()
        return 0;
    }
    else if (edad<18) {
        alert("Debe ser mayor de 18 años.")
        document.formulario.edad.focus()
        return 0;
    }
    else if (!direccion.value) {
        alert("Escriba su direcci\u00F3n por favor.");
        direccion.focus();
        verificar = false;
        return false;
    }
    else if (!email.value) {
        alert("Escriba su email por favor.");
        email.focus();
        verificar = false;
        return false;
    }
    else if (!expRegEmail.exec(email.value)) {
        alert("Escriba un email valido por favor.")
        email.focus();
        verificar = false;
        return false;
    }
    else if ((webSite.value!="")&& !expRegUrl.exec(webSite.value)) {
        alert("Escriba un formato de sitio web valido por favor.");
        webSite.focus();
        verificar = false;
        return false;
    }
    else if (!telefono.value) {
        alert("Escriba un n\u00famero de tel\u00e9fono por favor.");
        telefono.focus();
        verificar = false;
        return false;
    }
    else if (!expRegTelefono.exec(telefono.value)) {
        alert("El campo tel\u00E9fono admite n\u00FAmeros y espacios en blanco.");
        telefono.focus();
        verificar = false;
        return false;
    }
    else if (!comentario.value) {
        alert("El campo Mensaje es requerido.");
        comentario.focus();
        verificar = false;
        return false;
    }
    else if (comentario.value.length > 1000) {
        alert("El campo Mensaje no puede tener mas de 1000 caracteres.");
        comentario.focus();
        verificar = false;
        return false;
    }
    var elementos = document.getElementsByName("pregunta");
        for (var i=0; i<elementos.length; i++) {
            alert(" Elemento: " + elementos[i].value + "\n Seleccionado: " + elementos[i].checked);
        }
        if (verificar==true) {
            document.formulario.submit();
        }
}

function limpiarFormulario() {
    document.getElementById("formulario").reset();
}
function calcular() {
    var contadorChar = document.getElementById("contador-char").innerHTML=1000 - document.formulario.comentario.value.length;
}
window.onload = function() {
    var botonLimpiar = document.getElementById("limpiar");
    botonLimpiar.onclick=limpiarFormulario;  //Utilizacion de Eventos
    var botonEnviar = document.getElementById("enviar");
    botonEnviar.onclick=validarFormulario;
    //Utilizacion del DOM para acceder al elemento h1 de la clase logodescrip para insertar en el elemento
    //p logo
    var x = document.getElementsByClassName("logodescrip");
    document.getElementsByName("logo").innerHTML = x[0].innerHTML + '----' + new Date();
}
