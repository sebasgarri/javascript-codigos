function comparacion(){
    var num1=parseInt(document.getElementById("numero1").value)
    var num2=parseInt(document.getElementById("numero2").value)

    if (num1>num2)
    {
        document.getElementById('resultado').innerHTML= num1+ ( " Es mayor que ") +num2

    }
    else if (num2>num1)
    {
        document.getElementById('resultado').innerHTML= num2+ ( " Es mayor que  ") +num1
      

    }

    else if(num1==num2){
        document.getElementById('resultado').innerHTML= num1+ ( " Es igual que  ") +num2
    }
    else
   {
       
   }
}