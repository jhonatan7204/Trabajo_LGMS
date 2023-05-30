
/*
const inicio = document.querySelector('.titulo-encabezado');

inicio.addEventListener("click", saludar);

function saludar(){
    alert("hola mundo");

} */

class Persona {
    constructor(dni, nombre, edad) {
        this.dni = dni;
        this.nombre = nombre;
        this.edad = edad;
    }

    getdni() {
        return this.dni;
    }

    setdni(nuevoDNI) {
        this.dni = nuevoDNI;
    }

    getnombre() {
        return this.nombre;
    }

    setnombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }

    getedad() {
        return this.edad;
    }

    setedad(nuevaEdad) {
        this.edad = nuevaEdad;
    }

    mostrarDatos() {
        let cadena = "DNI -> " + this.dni + "\n Nombre -> " 
        + this.nombre + "\n Edad -> " + this.edad;
    }

}

class Profesor extends Persona {
    constructor(dni, nombre, edad, asignatura, claseAsignada, listaAlumnos) {
        super(dni, nombre, edad);
        this.asignatura = asignatura;
        this.claseAsignada = claseAsignada;
        this.listaAlumnos = listaAlumnos;
    }

    getasignatura() {
        return this.asignatura;
    }

    setasignatura(nuevaAsignatura) {
        this.asignatura = nuevaAsignatura;
    }

    getclaseAsignada() {
        return this.claseAsignada;
    }

    setclaseAsignada(nuevaClaseAsignada) {
        this.claseAsignada = nuevaClaseAsignada;
    }

    getlistaAlumnos() {
        return this.listaAlumnos;
    }

    mostrarDatos() {
        let cadena = "" + super.mostrarDatos() + "\n Asignatura -> " 
        + this.asignatura + "\n Clase asignada -> " + this.claseAsignada;

        return cadena;
    }
}

class Alumno extends Persona {
    constructor(dni, nombre, edad, curso, tablet) {
        super(dni, nombre, edad);
        this.tablet = tablet;
        this.curso = curso;
    }

    getcurso() {
        return this.curso;
    }

    setcurso(nuevoCurso) {
        this.curso = nuevoCurso;
    }

    gettablet() {
        return this.tablet;
    }

    settablet(nuevaTablet) {
        this.tablet = nuevaTablet;
    }

    mostrarDatos() {
        let cadena = "" + super.mostrarDatos() + "\n Curso -> " 
        + this.curso + "\n Tablet asignada -> " + this.tablet;

        return cadena;
    }
}

class Tablet {
    constructor(idTablet, alumnoActual, historialIncidencias) {
        this.idTablet = idTablet;
        this.alumnoActual = alumnoActual;
        this.historialIncidencias = historialIncidencias;
    }

    getidTablet() {
        return this.idTablet;
    }

    setidTablet(nuevaTablet) {
        this.idTablet = nuevaTablet;
    }

    getalumnoActual() {
        return this.alumnoActual;
    }

    setalumnoActual(nuevoAlumno) {
        this.alumnoActual = nuevoAlumno;
    }

    gethistorialIncidencias() {
        return this.historialIncidencias;
    }

    sethistorialIncidencias(historial) {
        this.historialIncidencias = historial;
    }

    agregarIncidencia(nuevaIncidencia) {
        this.historialIncidencias.push(nuevaIncidencia);
    }

    mostrarTablet() {
        let cadena = "ID tablet -> " + this.idTablet + "\n"
            + "Nombre alumno propietario -> " + this.alumnoActual.nombre +
            "\n" + "Historial de incidencias: ";

        /*
        if (this.historialIncidencias === 0) {
            cadena += "La tablet no tiene ningúna incidencia previa";
        } else {   
            let indice = 1;
            for(let incidencia of this.historialIncidencias) {
                cadena += "Incidencia número " + indice;
                cadena += incidencia;
                indice += 1; 
        } */

        return cadena;
    }


}


class Incidencia {
    constructor(idIncidencia, alumnoCausante, incidencia) {
        this.idIncidencia = idIncidencia;
        this.alumnoCausante = alumnoCausante;
        this.incidencia = incidencia;
    }

    getidIncidencia() {
        return this._idIncidencia;
    }

    setidIncidencia(id) {
        this.idIncidencia = id;
    }

    getalumnoCausante() {
        return this.alumnoCausante;
    }

    setalumnoCausante(alumno) {
        this.alumnoCausante = alumno;
    }

    getincidencia() {
        return this.incidencia;
    }

    setincidencia(incidencia) {
        this.incidencia = incidencia;
    }

    mostrarIncidencia() {
        let cadena = ("ID de la incidencia -> " + this.idIncidencia + "\n"
            + "Alumno causante: " + this.alumnoCausante.mostrarDatos() + "\n"
            + "Incidencia causada: \n" + this.incidencia);
        return cadena;
    }
}
let historial = ["Escupitajo", "Puñetazo"];

let alumno = new Alumno("12345678", "Andrés", 16, "1ºDAM", "Tablet1");
let tablet = new Tablet(3, alumno, historial);

let incidencia = new Incidencia(1, alumno, 'Falta grave');

let texto = incidencia.mostrarIncidencia();

let contenedor = document.querySelector(".textoJ");
contenedor.innerText = texto;


