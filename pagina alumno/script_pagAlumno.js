function mostrarMensajeConfirmacion() {
    
      alert("Formulario enviado correctamente.");
    
  }

  var formulario = document.getElementById('miFormulario');
  formulario.addEventListener('submit',function(event) {
    
        event.preventDefault(); // Evitamos el envío del formulario
      
        // Obtenemos los valores de los campos del formulario
        var nombre = document.getElementById('nombre').value;
        var modelo = document.getElementById('modelo').value;
        var incidencia = document.getElementById('incidencia').value;
      
        var incidencias = document.getElementById('incidencias');
        incidencias.textContent = nombre + " " + modelo+ " " + incidencia;
        this.reset();
        
});

  
  
