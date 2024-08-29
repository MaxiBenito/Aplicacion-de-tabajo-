   
    const intervaloAceite = 10000; 
    const intervaloCorrea = 60000; 
        
document.getElementById('guardar').addEventListener('click', function() {
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const km = document.getElementById('km').value;
    const aceite = document.getElementById('aceite').value;
    const correa = document.getElementById('correa').value;
   
    const auto = {
        marca: marca,
        modelo: modelo,
        km: km,
        aceite: aceite,
        correa: correa
    };
    
   
    const autoJSON = JSON.stringify(auto);
    
    
    localStorage.setItem('auto', autoJSON);
    

    const restanteAceite = intervaloAceite - (km - aceite);
    const restanteCorrea = intervaloCorrea - (km - correa);

    document.getElementById('mostrarMarca').innerHTML = `Marca: ${auto.marca}`;
    document.getElementById('mostrarModelo').innerHTML = `Modelo: ${auto.modelo}`;
    document.getElementById('mostrarkm').innerHTML = `km: ${auto.km}`;
    document.getElementById('mostrarAceite').innerHTML = `aceite: ${auto.aceite}`;
    document.getElementById('mostrarCorrea').innerHTML = `Correa: ${auto.correa}`;

    
    if (auto.km-auto.aceite < intervaloAceite) {
        document.getElementById('cambioAceite').textContent = `Kilómetros restantes para el próximo cambio de aceite: ${restanteAceite} km`;
    } else {
        document.getElementById('cambioAceite').textContent = `¡Es hora de cambiar el aceite!`;
    }

    console.log('Datos del auto:', auto);
    console.log('Kilómetros restantes para el cambio de aceite:', restanteAceite);



    if (auto.km-auto.correa < intervaloCorrea) {
        document.getElementById('cambioCorrea').textContent = `Kilómetros restantes para el próximo cambio de correa: ${restanteCorrea} km`;
    } else {
        document.getElementById('cambioCorrea').textContent = `¡Es hora de cambiar la correa!`;
    }

    console.log('Datos del auto:', auto);
    console.log('Kilómetros restantes para el cambio de correa dentada:', restanteCorrea);

});

   
    

  
