

function saludo(){  
    alert("Hola soy un alert")
}

function sumar(){
  
   var valor1=parseInt(document.getElementById("valor1").value)
   var valor2=parseInt(document.getElementById("valor2").value)
   
   var suma = 0
   suma= v1 + v2

   document.getElementById("resultado").value = suma


}

function promedio(){
  
    var n1=parseFloat(document.getElementById("nota1").value)
    var n2=parseFloat(document.getElementById("nota2").value)
    var n3=parseFloat(document.getElementById("nota3").value)
    var promedio = 0.0
 
    promedio = (n1+n2+n3)/3
 
    document.getElementById("resultado").value = promedio
    
    // and &&    or ||
    if( promedio >= 3.95   ){
       //alert("Aprobado") 
       document.getElementById("estado").innerHTML="Aprobado"
    }else{
        //alert("Reprobado")
        document.getElementById("estado").innerHTML="Reprobado"
    }
 
 }