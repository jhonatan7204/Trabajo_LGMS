let profRandom = rng.nextInteger(profesores.length);
let profesor = profesores[profRandom];

let texto1 = profesor.getNombre() + " " + profesor.getApellidos();

let contenedor = document.querySelector(".titulo-encabezado");
contenedor.innerText += texto1;

for (let i = 0; i < profesor.getListaAlumnos().length; i++) {

  let numeroIncidencia = profesor.getListaAlumnos()[i].darNumeroIncidencia();  

  let texto = profesor.getListaAlumnos()[i].getNombre() + " " + profesor.getListaAlumnos()[i].getApellidos() 
  + "-> Tablet id: " + profesor.getListaAlumnos()[i].getTabletAsignada().getIdTablet() + ", número de incidencias: " + numeroIncidencia + "\n"; 
  
  let contenedor = document.querySelector(".incidencias");
  contenedor.innerText += texto;
}

console.log(profesor.getNombre())