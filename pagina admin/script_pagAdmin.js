for (let i = 0; i < listaClases.length; i++) {
      texto = "Alumnos de la clase " + listaClases[i].getNombreClase() + ": \n";
    
      let contenedor = document.querySelector(".alumnos");
      contenedor.innerText += texto;
    
      for (let j = 0; j < listaClases[i].getListaAlumnos().length; j++) {
        texto = listaClases[i].getListaAlumnos()[j].getNombre() + " " + listaClases[i].getListaAlumnos()[j].getCurso()+ "\n";
    
        let contenedor = document.querySelector(".alumnos");
        contenedor.innerText += texto;
     
      }
}

let profRandom = rng.nextInteger(profesores.length);
let profesor = profesores[profRandom];

for (let i = 0; i < profesor.getListaAlumnos().length; i++) {

      let numeroIncidencia = profesor.getListaAlumnos()[i].darNumeroIncidencia();  
    
      let texto = profesor.getListaAlumnos()[i].getNombre() + " " + profesor.getListaAlumnos()[i].getApellidos() 
      + "-> Tablet id: " + profesor.getListaAlumnos()[i].getTabletAsignada().getIdTablet() + ", número de incidencias: " + numeroIncidencia + "\n"; 
      
      let contenedor = document.querySelector(".incidencia");
      contenedor.innerText += texto;
    }


    let textoInc = estadisticasIncidencias() ;
      
    let contenedor = document.querySelector(".estadisticas");
    contenedor.innerText += textoInc;




  
  
