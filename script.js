
try {
  document.querySelector(".boton.numero2").addEventListener("click", () => {
    window.location = "Sobre nosotros/SobreNosotros.html";
  });
} catch (e) {

}

class Persona {
  constructor(dni, nombre, apellidos, edad, contrasenya) {
    this.dni = dni;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
    this.contrasenya = contrasenya;
  }

  getDni() {
    return this.dni;
  }

  setDni(dni) {
    this.dni = dni;
  }

  getNombre() {
    return this.nombre;
  }

  setNombre(nombre) {
    this.nombre = nombre;
  }

  getApellidos() {
    return this.apellidos;
  }

  setApellidos(apellidos) {
    this.apellidos = apellidos;
  }

  getEdad() {
    return this.edad;
  }

  setEdad(edad) {
    this.edad = edad;
  }

  getContrasenya() {
    return this.contrasenya;
  }

  setContrasenya(contrasenya) {
    this.contrasenya = contrasenya;
  }

  mostrarDatos() {
    let linea = "DNI -> " + this.dni
      + "\nNombre -> " + this.nombre
      + "\nApellidos -> " + this.apellidos
      + "\nEdad -> " + this.edad;
    return linea;
  }
}


class Incidencias {
  constructor(idIncidencia, causaIncidencia) {
    this.idIncidencia = idIncidencia;
    this.causaIncidencia = causaIncidencia;
  }

  getIdIncidencia() {
    return this.idIncidencia;
  }

  setIdIncidencia(idIncidencia) {
    this.idIncidencia = idIncidencia;
  }

  getCausIncidencia() {
    return this.causaIncidencia;
  }

  setCausIncidencia(causIncidencia) {
    this.causaIncidencia = causIncidencia;
  }
}

class Tablet {
  constructor(idTablet, alumnoPropietario, listaIncidencias) {
    this.idTablet = idTablet;
    this.alumnoPropietario = alumnoPropietario;
    this.listaIncidencias = listaIncidencias;
  }

  getIdTablet() {
    return this.idTablet;
  }

  setIdTablet(idTablet) {
    this.idTablet = idTablet;
  }

  getAlumnoPropietario() {
    return this.alumnoPropietario;
  }

  setAlumnoPropietario(alumnoPropietario) {
    this.alumnoPropietario = alumnoPropietario;
  }

  getListaIncidencias() {
    return this.listaIncidencias;
  }

  setListaIncidencias(listaIncidencias) {
    this.listaIncidencias = listaIncidencias;
  }

  anyadirIncidencia(nuevaIncidencia) {
    let nuevaLista = [...this.listaIncidencias, nuevaIncidencia];
    this.listaIncidencias = nuevaLista;
  }

  devolverIncidencias() {
    let linea = "";
    if (this.listaIncidencias.length === 0) {
      return "Esta tablet no ha sufrido ninguna incidencia";
    } else {
      for (let i = 0; i < this.listaIncidencias.length; i++) {
        linea += "\nNúmero incidencia " + (i + 1)
          + "\nId incidencia -> " + this.listaIncidencias[i].getIdIncidencia()
          + "\nCausa incidencia -> " + this.listaIncidencias[i].getCausIncidencia();
      }
    }
    return linea;
  }

  mostrarTablet() {
    let linea = "ID tablet -> " + this.getIdTablet()
      + "\n" + this.alumnoPropietario.mostrarAlumno() + "\n"
      + "\nHistorial de incidencias: "
      + "\n" + this.devolverIncidencias();

    return linea;
  }
}


class Alumno extends Persona {
  constructor(curso, tabletAsignada, dni, nombre, apellidos, edad, contrasenya) {
    super(dni, nombre, apellidos, edad, contrasenya);
    this.curso = curso;
    this.tabletAsignada = tabletAsignada;
  }

  getCurso() {
    return this.curso;
  }

  setCurso(curso) {
    this.curso = curso;
  }

  getTabletAsignada() {
    return this.tabletAsignada;
  }

  setTabletAsignada(tabletAsignada) {
    this.tabletAsignada = tabletAsignada;
  }

  darNumeroIncidencia() {
    let numero = this.getTabletAsignada().getListaIncidencias().length;
    return numero;
  }

  mostrarAlumno() {
    let linea = "Alumno de la clase " + this.curso
      + "\n" + super.mostrarDatos()
      + "\nTablet asignada -> " + this.tabletAsignada.getIdTablet();

    return linea;
  }
}

class Profesor extends Persona {
  constructor(asignatura, claseAsignada, listaAlumnos, dni, nombre, apellidos, edad, contrasenya) {
    super(dni, nombre, apellidos, edad, contrasenya);
    this.asignatura = asignatura;
    this.claseAsignada = claseAsignada;
    this.listaAlumnos = listaAlumnos;
  }

  getAsignatura() {
    return this.asignatura;
  }

  setAsignatura(asignatura) {
    this.asignatura = asignatura;
  }

  getClaseAsignada() {
    return this.claseAsignada;
  }

  setClaseAsignada(claseAsignada) {
    this.claseAsignada = claseAsignada;
  }

  getListaAlumnos() {
    return this.listaAlumnos;
  }

  setListaAlumnos(listaAlumnos) {
    this.listaAlumnos = listaAlumnos;
  }

  mostrarProfe() {
    let linea = "Tutor de la clase " + this.asignatura
      + "\n" + super.mostrarDatos()
      + "\nAsignatura especializada -> " + this.asignatura;

    return linea;
  }
}

class Clase {
  constructor(nombreClase, listaAlumnos, profesorEncargado) {
    this.nombreClase = nombreClase;
    this.listaAlumnos = listaAlumnos;
    this.profesorEncargado = profesorEncargado;
  }

  getNombreClase() {
    return this.nombreClase;
  }

  setNombreClase(nombreClase) {
    this.nombreClase = nombreClase;
  }

  getListaAlumnos() {
    return this.listaAlumnos;
  }

  setListaAlumnos(listaAlumnos) {
    this.listaAlumnos = listaAlumnos;
  }

  getProfesorEncargado() {
    return this.profesorEncargado;
  }

  setProfesorEncargado(profesorEncargado) {
    this.profesorEncargado = profesorEncargado;
  }

  devolverPorcentaje() {
    let sumaEdades = 0;
    const listaAlumnos = this.getListaAlumnos();
    
    for (let j = 0; j < listaAlumnos.length; j++) {
      sumaEdades += listaAlumnos[j].getEdad();
    }
  
    const promedioEdades = sumaEdades / listaAlumnos.length;
    const porcentaje = (promedioEdades / 100) * 100;
  
    return porcentaje.toFixed(2);
  }

  
}

class Director extends Persona {
  constructor(listaProfesores, listaClases, listaAlumnos, dni, nombre, apellidos, edad, contrasenya) {
    super(dni, nombre, apellidos, edad, contrasenya);
    this.listaProfesores = listaProfesores;
    this.listaClases = listaClases;
    this.listaAlumnos = listaAlumnos;
  }

  getListaProfesores() {
    return this.listaProfesores;
  }

  setListaProfesores(listaProfesores) {
    this.listaProfesores = listaProfesores;
  }

  getListaClases() {
    return this.listaClases;
  }

  setListaClases(listaClases) {
    this.listaClases = listaClases;
  }

  getListaAlumnos() {
    return this.listaAlumnos;
  }

  setListaAlumnos(listaAlumnos) {
    this.listaAlumnos = listaAlumnos;
  }

  mostrarDirector() {
    let linea = "Director del instituto \n" + super.mostrarDatos();

    return linea;
  }
}


class Random {
  constructor() {
    this.seed = Date.now();
  }

  nextInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(this.random() * (max - min + 1) + min);
  }

  nextInteger(max) {
    let min = 0;
    max = Math.floor(max);
    return Math.floor(this.random() * (max - min) + min);
  }

  random() {
    const x = Math.sin(this.seed++) * 10000;
    return x - Math.floor(x);
  }
}

const rng = new Random();

const nombres = [
  "Laura", "Antonio", "Ian", "Noa", "Mario", "Juan", "Raúl", "Jose", "Miguel Ángel", "Saúl",
  "Lara", "Selam", "Radwane", "David", "Daniel", "Maria", "Tryndamere", "Gragas", "Francisca",
  "Eugenio", "Samuel", "Jorge", "Ramón", "Rubén", "Ana", "Antonia", "Pedro", "Rammus",
  "Paula", "Fátima", "Imanol", "Julián", "Juan Carlos", "Mordekaiser", "Juan", "Paco",
  "Celia", "Silvia", "Claudia", "Manolo", "Juan José", "Marcos", "Mario", "Wario",
  "Pablo", "Ferrán", "Andrea", "Iván", "Javier", "Alba", "Jhonatan", "Alejandro",
  "Sandra", "Hugo", "John"
];
const apellidos = [
  "García", "Rodríguez", "López", "Martínez", "Hernández", "González", "Pérez", "Ramírez", "Torres", "Flores",
  "Gómez", "Sánchez", "Romero", "Cruz", "Morales", "Ortega", "Vargas", "Mendoza", "Castro", "Ruiz",
  "Delgado", "Ríos", "Reyes", "Jiménez", "Navarro", "Aguilar", "Silva", "Paredes", "Miranda", "Méndez",
  "Castillo", "Morales", "Medina", "Figueroa", "Guzmán", "Herrera", "Valdez", "Escobar", "Cabrera", "Ramos",
  "Guijarro", "Ruiz", "Gasch", "Alarcón", "Caicedo", "Restrepo", "Belkharroub", "Espinosa", "Campos",
  "Ventura", "Proctor", "Corey", "Hathorne", "GoodMan"
];
const incidencias = [
  "Mojada", "Rotura de Cristal", "Malware", "Siniestro", "Robo de tablet", "Tráfico de tablet",
  "Tablet arrojada", "Mal funcionamiento", "Tablet perdida", "Tablet machacada", "Partida en 1000 pedazos"
];

let indiceTablet = 1;

const asignaturas = ["Matemáticas", "Lengua Castellana", "Lengua Valenciana", "Informática", "Física y química", "Educación física", "Inglés", "Filosofía", "Biología"];

const clases = ["1A", "1B", "2A", "2B", "3A", "3B", "4A", "4B", "1BACH", "2BACH", "1DAM", "2DAM", "1DAW", "2DAW", "1ASIR", "2ASIR"];

const profesores = new Array(clases.length);
const listaClases = new Array(clases.length);
const listaAlumnos = new Array(clases.length);

let director;

/* Comienza el main */

function main() {

  inicializarClases();
  crearListaAlumnos();
  crearListaProfesores();
  asignarClases();
  crearDirector();

}

function estadisticasIncidencias() {
  let textoInc = "";
  let numAlumnos = indiceTablet;
  let CeroInc = 0;
  let UnoInc = 0;
  let DosInc = 0;
  let TresInc = 0;
  let CuatroInc = 0;

  for (let i = 0; i < listaAlumnos.length; i++) {
    for (let j = 0; j < listaAlumnos[i].length; j++) {
      if (listaAlumnos[i][j].getTabletAsignada().getListaIncidencias().length === 0) {
        CeroInc += 1;
      } else if (listaAlumnos[i][j].getTabletAsignada().getListaIncidencias().length === 1) {
        UnoInc += 1;
      } else if (listaAlumnos[i][j].getTabletAsignada().getListaIncidencias().length === 2) {
        DosInc += 1;
      } else if (listaAlumnos[i][j].getTabletAsignada().getListaIncidencias().length === 3) {
        TresInc += 1;
      } else {
        CuatroInc += 1;
      }
    }
  }

  let ptjCero = (CeroInc / numAlumnos) * 100;
  let ptjUno = (UnoInc / numAlumnos) * 100;
  let ptjDos = (DosInc / numAlumnos) * 100;
  let ptjTres = (TresInc / numAlumnos) * 100;
  let ptjCuatro = (CuatroInc / numAlumnos) * 100;

  textoInc += "\n Porcentaje de alumnos con 0 incidencias -> " + ptjCero.toFixed(2);
  textoInc += "\n Porcentaje de alumnos con 1 incidencias -> " + ptjUno.toFixed(2);
  textoInc += "\n Porcentaje de alumnos con 2 incidencias -> " + ptjDos.toFixed(2);
  textoInc += "\n Porcentaje de alumnos con 3 incidencias -> " + ptjTres.toFixed(2);
  textoInc += "\n Porcentaje de alumnos con 4 incidencias -> " + ptjCuatro.toFixed(2);

  console.log(ptjCero.toFixed(2));
  console.log(ptjUno.toFixed(2));
  console.log(ptjDos.toFixed(2));
  console.log(ptjTres.toFixed(2));
  console.log(ptjCuatro.toFixed(2));

  /*----------------------------------------------------------------*/

  let claseTemporal = "";
  let numeroTemporal = 1;
  for (let i = 0; i < listaClases.length; i++) {
    if (listaClases[i].getListaAlumnos().length > numeroTemporal) {
       claseTemporal = listaClases[i].getNombreClase();
       numeroTemporal = listaClases[i].getListaAlumnos().length;
    }
  }

  console.log("La clase con más alumnos es la de " + claseTemporal + " con " + numeroTemporal);
  textoInc += "La clase con más alumnos es la de " + claseTemporal + " con " + numeroTemporal;

    /*----------------------------------------------------------------*/

    let claseTemporal2 = "";
    let numeroTemporal2 = 27;
    for (let i = 0; i < listaClases.length; i++) {
      if (listaClases[i].getListaAlumnos().length < numeroTemporal2) {
         claseTemporal2 = listaClases[i].getNombreClase();
         numeroTemporal2 = listaClases[i].getListaAlumnos().length;
      }
    }
  
    console.log("La clase con menos alumnos es la de " + claseTemporal2 + " con " + numeroTemporal2);
    textoInc += "\nLa clase con menos alumnos es la de " + claseTemporal2 + " con " + numeroTemporal2;

    /*----------------------------------------------------------------*/

    let claseTemporal3 = "";
    let numeroTemporal3 = 0;
    
    for (let i = 0; i < listaClases.length; i++) {
      const porcentaje = listaClases[i].devolverPorcentaje();
      
      if (porcentaje > numeroTemporal3) {
        claseTemporal3 = listaClases[i].getNombreClase();
        numeroTemporal3 = porcentaje;
      }
    }
    
    console.log("La clase con los alumnos más mayores es " + claseTemporal3 + " con una media de " + numeroTemporal3 + "%");
    textoInc += "\nLa clase con los alumnos más mayores es " + claseTemporal3 + " con una media de " + numeroTemporal3+ "%";

        /*----------------------------------------------------------------*/

        let claseTemporal4 = "";
        let numeroTemporal4 = 27;
        
        for (let i = 0; i < listaClases.length; i++) {
          const porcentaje = listaClases[i].devolverPorcentaje();
          
          if (porcentaje < numeroTemporal4) {
            claseTemporal4 = listaClases[i].getNombreClase();
            numeroTemporal4 = porcentaje;
          }
        }
        
        console.log("La clase con los alumnos más jóvenes es " + claseTemporal4 + " con una media de " + numeroTemporal4 + "%");
        textoInc += "\nLa clase con los alumnos más jóvenes es " + claseTemporal4 + " con una media de " + numeroTemporal4 + "%";

        return textoInc;
  }


function rolearDatos() {
  inicializarClases();
  crearListaAlumnos();
  crearListaProfesores();
  asignarClases();
  crearDirector();
}

function crearDirector() {
  const nombreEntero = darNombre();
  const nombreDividido = nombreEntero.split(" ");
  const nombre = nombreDividido[0];
  const apellidos = nombreDividido[1] + " " + nombreDividido[2];

  const edad = rng.nextInt(30, 76);
  const nif = darNif();

  director = new Director(profesores, listaClases, listaAlumnos, nif, nombre, apellidos, edad, "1234");
}

function inicializarClases() {
  for (let i = 0; i < listaAlumnos.length; i++) {
    const numAlumnos = rng.nextInt(10, 25);
    listaAlumnos[i] = new Array(numAlumnos);
  }
}

function crearListaAlumnos() {
  for (let i = 0; i < listaAlumnos.length; i++) {
    for (let j = 0; j < listaAlumnos[i].length; j++) {
      const alumnoNuevo = darAlumno(i);
      listaAlumnos[i][j] = alumnoNuevo;
    }
  }
}

function asignarClases() {
  for (let i = 0; i < listaClases.length; i++) {
    const nombreClase = clases[i];
    const profesor = profesores[i];
    const lista = listaAlumnos[i];

    listaClases[i] = new Clase(nombreClase, lista, profesor);
  }
}

function darAlumno(indice) {
  const claseCursada = clases[indice];

  const nombreEntero = darNombre();
  const nombreDividido = nombreEntero.split(" ");
  const nombre = nombreDividido[0];
  const apellidos = nombreDividido[1] + " " + nombreDividido[2];

  const edad = rng.nextInt(12, 19);
  const nif = darNif();

  const pass = darContrasenya();

  let tablet = null;
  const nuevoAlumno = new Alumno(claseCursada, tablet, nif, nombre, apellidos, edad, pass);
  nuevoAlumno.setTabletAsignada(crearTablet(nuevoAlumno));

  return nuevoAlumno;
}

function crearListaProfesores() {
  let profesor;
  for (let i = 0; i < profesores.length; i++) {
    profesor = darProfesor(i);
    profesores[i] = profesor;
  }
}

function darProfesor(indice) {
  const claseAsignada = clases[indice];

  const nombreEntero = darNombre();
  const nombreDividido = nombreEntero.split(" ");
  const nombre = nombreDividido[0];
  const apellidos = nombreDividido[1] + " " + nombreDividido[2];

  const edad = rng.nextInt(25, 60);
  const nif = darNif();

  const numAzar = rng.nextInteger(asignaturas.length);
  const asignatura = asignaturas[numAzar];

  const lista = listaAlumnos[indice];

  const pass = darContrasenya();

  const profesor = new Profesor(asignatura, claseAsignada, lista, nif, nombre, apellidos, edad, pass);

  return profesor;
}

function crearTablet(al) {
  const idTablet = indiceTablet++;

  const listaIncidencias = crearListaIncidencia();

  const tablet = new Tablet(idTablet, al, listaIncidencias);

  return tablet;
}

function crearListaIncidencia() {
  const numIncidencias = rng.nextInt(0, 4);
  const lista = new Array(numIncidencias);

  for (let i = 0; i < lista.length; i++) {
    const idIncidencia = crearIdIncidencia();
    const incidenciaAzar = rng.nextInteger(incidencias.length);
    const tipoIncidencia = incidencias[incidenciaAzar];
    lista[i] = new Incidencias(idIncidencia, tipoIncidencia);
  }

  return lista;
}

function crearIdIncidencia() {
  const azar = `${rng.nextInt(0, 10)}${rng.nextInt(0, 10)}${rng.nextInt(0, 10)}${rng.nextInt(0, 10)}${rng.nextInt(0, 10)}`;

  const id = parseInt(azar);

  return id;
}

function darNif() {
  const nif = `${rng.nextInt(0, 10)}${rng.nextInt(0, 10)}${rng.nextInt(0, 10)}${rng.nextInt(0, 10)}${rng.nextInt(0, 10)}${rng.nextInt(0, 10)}${rng.nextInt(0, 10)}${rng.nextInt(0, 10)}${String.fromCharCode(rng.nextInt(65, 91))}`;

  return nif;
}

function darContrasenya() {
  const nif = `${String.fromCharCode(rng.nextInt(40, 123))}${String.fromCharCode(rng.nextInt(40, 123))}${String.fromCharCode(rng.nextInt(40, 123))}${String.fromCharCode(rng.nextInt(40, 123))}${String.fromCharCode(rng.nextInt(40, 123))}${String.fromCharCode(rng.nextInt(40, 123))}`;

  return nif;
}

function darEdad(min, max) {
  const edad = rng.nextInt(min, max);
  return edad;
}

function darNombre() {
  const numAzar = rng.nextInteger(nombres.length);
  const numApellido1 = rng.nextInteger(apellidos.length);
  const numApellido2 = rng.nextInteger(apellidos.length);

  const nombre = nombres[numAzar];
  const apellido1 = apellidos[numApellido1];
  const apellido2 = apellidos[numApellido2];

  const nombreCompleto = nombre + " " + apellido1 + " " + apellido2;

  return nombreCompleto;
}


main();




