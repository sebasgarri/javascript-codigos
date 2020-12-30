const x=document.getElementById('opcion1')
    const y=document.getElementById('opcion2')
    x.addEventListener("click",click1)
    y.addEventListener("click",click2)
    function click1(){
document.getElementById('resultado').innerHTML="Usted eligio la primera opcion"
    }
    function click2(){
        document.getElementById('resultado').innerHTML="Usted eligio la segunda opcion"
    }
