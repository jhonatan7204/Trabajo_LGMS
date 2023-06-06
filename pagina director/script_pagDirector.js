for (let i = 0; i < profesores.length; i++) {
  texto = profesores[i].getNombre() + " tutor(a) de la clase " + profesores[i].getClaseAsignada() 
  + "\n"; 
  
  let contenedor = document.querySelector(".profesores");
  contenedor.innerText += texto;
}



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


