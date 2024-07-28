
function usarCalculadoraDePresupuesto () {
    let profesion = prompt("Ingrese su profesion");
    console.log("Su profesion es: " + profesion);
    let horas = prompt("Ingrese cantidad de horas a trabajar");
    console.log("Cantidad de horas a trabajar: " + horas + " hs");
    
    let honorarios 
    switch (profesion) {
    case "electricista":
        honorarios=10
            console.log ( "Su hora de trabajo vale: " + honorarios +  " U$D");
        break;
    case "gasista":
        honorarios=8
            console.log ( "Su hora de trabajo vale: " + honorarios +  " U$D");          
        break;
    case "plomero":
        honorarios=3
            console.log ( "Su hora de trabajo vale: " + honorarios +  " U$D");          
        break;
    case "mecanico":
        honorarios=15
          console.log ( "Su hora de trabajo vale: " + honorarios +  " U$D");          
        break;
    case "carpintero":
        honorarios=12
            console.log ( "Su hora de trabajo vale: " + honorarios +  " U$D");
        break;
    case "jardinero":
        honorarios=8
            console.log ( "Su hora de trabajo vale: " + honorarios +  " U$D");          
        break;
    case "herrero":
        honorarios=8
            console.log ( "Su hora de trabajo vale: " + honorarios +  " U$D");          
        break;
     case "ama de casa":
        honorarios=3
             console.log ( "Su hora de trabajo vale: " + honorarios +  " U$D");          
        break;
    default:
       honorarios = prompt("Su profesion no esta en nuestra lista. Ingrese su precio en u$d por hora");
        break;
 
}

    let presupuesto = (horas*honorarios);
    console.log ("Su presupuesto es de: " + presupuesto + " U$D");

    let comision = (presupuesto*0.05);
    console.log ("La comision de la plataforma es de un 5%: " + comision + " U$D");
    console.log ("Su ganacia total es: " + (presupuesto-comision) + " U$D");
    console.log ("Gracias por usar nuesta plataforma")
 
}



usarCalculadoraDePresupuesto();



