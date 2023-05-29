
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

    get dni() {
        return this._dni;
    }

    set dni(nuevo_DNI) {
        this._dni = nuevo_DNI;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nuevo_Nombre) {
        this._nombre = nuevo_Nombre;
    }

    get edad() {
        return this._edad;
    }

    set edad(nueva_Edad) {
        this._edad = nueva_Edad;
    }

    mostrarDatos(){
        console.log("DNI -> " + this.dni);
        console.log("Nombre -> " + this.nombre);
        console.log("Edad -> " + this.edad);
    }

}

class Profesor extends Persona {
    constructor(dni, nombre, edad, asignatura, claseAsignada, listaAlumnos) {
        super(dni, nombre, edad); 
        this.asignatura = asignatura;
        this.claseAsignada = claseAsignada;
        this.listaAlumnos = listaAlumnos;
    }

    get asignatura() {
        return this._asignatura;
    }

    set asignatura(nuevaAsignatura) {
        this._asignatura = nuevaAsignatura;
    }

    get claseAsignada() {
        return this._claseAsignada;
    }

    set claseAsignada(nuevaClaseAsignada) {
        this._claseAsignada = nuevaClaseAsignada;
    }

    get listaAlumnos() {
        return this._listaAlumnos;
    }

    mostrarDatos(){
        super.mostrarDatos();
        console.log("Asignatura -> " + this.asignatura);
        console.log("Clase asignada -> " + this.claseAsignada);      
    }
}

class Alumno extends Persona {
    constructor(dni, nombre, edad, curso, tablet) {
        super(dni, nombre, edad);
        this._tablet = tablet; 
        this._curso = curso;
    }

    get curso() {
        return this._curso;
    }

    set curso(nuevoCurso) {
        this._curso = nuevoCurso;
    }

    get tablet() {
        return this._tablet;
    }

    set tablet(nuevaTablet) {
        this._tablet = nuevaTablet;
    }

    mostrarDatos() {
        super.mostrarDatos();
        console.log("Curso -> " + this.curso);
        console.log("Tablet asignada -> " + this.tablet);      
    }
}

class Tablet{
    constructor(idTablet,alumnoActual,historialIncidencias) {
        this.idTablet = idTablet;
        this.alumnoActual = alumnoActual;
        this.historialIncidencias = historialIncidencias;
    }

    get idTablet(){
        return this._idTablet;
    }

    set idTablet(nuevaTablet) {
        this._idTablet = nuevaTablet;
    }

    get alumnoActual() {
        return this._alumnoActual;
    }

    set alumnoActual (nuevoAlumno) {
        this._alumnoActual = nuevoAlumno;
    }

    get historialIncidencias(){
        return this._historialIncidencias;
    }

    set historialIncidencias(historial){
        this._historialIncidencias = historial;
    }

    agregarIncidencia(nuevaIncidencia){
        this.historialIncidencias.push(nuevaIncidencia);
    }

    mostrarTablet(){
        console.log("ID tablet -> " + this.idTablet);
        console.log("Alumno propietario -> " + this.alumnoActual.nombre);
        console.log("Historial de incidencias: ");

        if (this.historialIncidencias === 0){
            console.log("La tablet no tiene ningúna incidencia previa");
        } else {
            let indice = 1;
            console.log("");
            for(let incidencia of this.historialIncidencias) {
                console.log("Incidencia número " + indice);
                console.log(incidencia);
                indice += 1;
            }
        }
    }


}


const alumno = new Alumno("12345678", "Andrés", 16, "1ºDAM", "Tablet1");
const historialIncidencias = ["Escupitajo", "Destrozo", "Se descargó tik tok"];


const tablet = new Tablet("Tablet1", alumno, historialIncidencias);

tablet.historialIncidencias.agregarIncidencia("afasdfas");

tablet.mostrarTablet();

/*
let alumno1 = new Alumno("74394272J","Andres",33,"1ºDAN","Tablet_ejemplo");

alumno1.mostrarDatos(); */