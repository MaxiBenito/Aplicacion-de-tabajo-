function cargaDeDatos(){
    function autos (nombre, km, aceite, correa, cubierta) {
             this.nombre = nombre;
             this.km = km;
             this.aceite= aceite;
             this.correa= correa;
             this.cubierta= cubierta;
    
    }
      const autos1 = new autos (prompt("Ingrese la marca del auto"), prompt ("Ingrese sus km "), prompt ("Ingrese km de su ultimo cambio de aceite "), prompt ("Ingrese km de su ultimo cambio de correa") );
      return autos1;
    }
    
    function calcularCambioAceite(autos1){
     
      autos1.aceite=parseInt(autos1.aceite);
      let cambioAceite = autos1.aceite+10000;
     
    
      if (autos1.km - autos1.aceite > 10000) {
        alert("¡Atención! El cambio de aceite está atrasado.");
    } 
            else {
        console.log("el proximo cambio de aceite es en: " + cambioAceite + " km");
    }
    }
    
    function calcularCambioCorrea(autos1) {
    
        autos1.correa=parseInt(autos1.correa);
        let cambioCorrea = autos1.correa+60000;
    
    if (autos1.km - autos1.correa > 60000) {
        alert("¡Atención! El cambio de correa está atrasado.");
    } 
            else {
        console.log("el proximo cambio de correa es en: " + cambioCorrea + " km");
    }
    }
    
    function mantenimiento (){
    
    
        const autos1 = cargaDeDatos();
    
        console.log(autos1);
    
        calcularCambioAceite(autos1);
        calcularCambioCorrea(autos1);
    
        const mantenimientoArray = [autos1.km, autos1.aceite + 10000, autos1.correa + 60000];
        console.log(mantenimientoArray);
        
    }
    
    mantenimiento();
    