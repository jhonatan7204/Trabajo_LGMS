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
        incidencias.innerHTML += nombre + "\n-> " + modelo+ " \n ->" + incidencia;
              
});

let alRandom = rng.nextInteger(listaAlumnos.length);
let alRandom2 = rng.nextInteger(listaAlumnos[alRandom].length);
let alumno = listaAlumnos[alRandom][alRandom2];

console.log(alumno.getTabletAsignada().mostrarTablet());

let texto1 = alumno.getNombre() + " " + alumno.getApellidos();

let contenedor = document.querySelector(".titulo-encabezado");
contenedor.innerText += texto1;

let texto2 = alumno.mostrarAlumno();

let contenedor2 = document.querySelector(".pergamino");
contenedor2.innerText += texto2;


let texto3 = alumno.getTabletAsignada().devolverIncidencias();

let contenedor3 = document.getElementById("incidencias");
contenedor3.innerText += texto3;



  
  
