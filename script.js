class Persona {
    constructor(dni, nombre, edad) {
        this._dni = dni;
        this._nombre = nombre;
        this._edad = edad;
    }

    getdni() {
        return this._dni;
    }

    setdni(nuevo_DNI) {
        this._dni = nuevo_DNI;
    }

    getnombre() {
        return this._nombre;
    }

    setnombre(nuevo_Nombre) {
        this._nombre = nuevo_Nombre;
    }

    getedad() {
        return this._edad;
    }

    setedad(nueva_Edad) {
        this._edad = nueva_Edad;
    }

    mostrarDatos(){
        console.log("DNI -> " + this._dni);
        console.log("Nombre -> " + this._nombre);
        console.log("Edad -> " + this._edad);
    }

}

class Profesor extends Persona {
    constructor(dni, nombre, edad, asignatura, claseAsignada, listaAlumnos) {
        super(dni, nombre, edad); 
        this._asignatura = asignatura;
        this._claseAsignada = claseAsignada;
        this._listaAlumnos = listaAlumnos;
    }

    getasignatura() {
        return this._asignatura;
    }

    setasignatura(nuevaAsignatura) {
        this._asignatura = nuevaAsignatura;
    }

    getclaseAsignada() {
        return this._claseAsignada;
    }

    setclaseAsignada(nuevaClaseAsignada) {
        this._claseAsignada = nuevaClaseAsignada;
    }

    getlistaAlumnos() {
        return this._listaAlumnos;
    }

    mostrarDatos(){
        super.mostrarDatos();
        console.log("Asignatura -> " + this._asignatura);
        console.log("Clase asignada -> " + this._claseAsignada);      
    }
}

class Alumno extends Persona {
    constructor(dni, nombre, edad, curso, tablet) {
        super(dni, nombre, edad);
        this._tablet = tablet; 
        this._curso = curso;
    }

    getcurso() {
        return this._curso;
    }

    setcurso(nuevoCurso) {
        this._curso = nuevoCurso;
    }

    gettablet() {
        return this._tablet;
    }

    settablet(nuevaTablet) {
        this._tablet = nuevaTablet;
    }

    mostrarDatos() {
        super.mostrarDatos();
        console.log("Curso -> " + this._curso);
        console.log("Tablet asignada -> " + this._tablet);      
    }
}

class Tablet{
    constructor(idTablet,alumnoActual,historialIncidencias) {
        this._idTablet = idTablet;
        this._alumnoActual = alumnoActual;
        this._historialIncidencias = historialIncidencias;
    }

    getidTablet(){
        return this._idTablet;
    }

    setidTablet(nuevaTablet) {
        this._idTablet = nuevaTablet;
    }

    getalumnoActual() {
        return this._alumnoActual;
    }

    setalumnoActual (nuevoAlumno) {
        this._alumnoActual = nuevoAlumno;
    }

    gethistorialIncidencias(){
        return this._historialIncidencias;
    }

    sethistorialIncidencias(historial){
        this._historialIncidencias = historial;
    }

    agregarIncidencia(nuevaIncidencia){
        this._historialIncidencias.push(nuevaIncidencia);
    }

    mostrarTablet(){
        console.log("ID tablet -> " + this._idTablet);
        console.log("Alumno propietario -> " + this._alumnoActual.getnombre());
        console.log("Historial de incidencias: ");

        if (this._historialIncidencias === 0){
            console.log("La tablet no tiene ningúna incidencia previa");
        } else {
            let indice = 1;
            console.log("");
            for(let incidencia of this._historialIncidencias) {
                console.log("Incidencia número " + indice);
                console.log(incidencia);
                indice += 1;
            }
        }
    }


}

let alumno = new Alumno("12345678", "Andrés", 16, "1ºDAM", "Tablet1");
let historialIncidencias = ["Escupitajo", "Destrozo", "Se descargó tik tok"];


let tablet = new Tablet("Tablet1", alumno, historialIncidencias);

tablet.agregarIncidencia("afasdfas");
tablet.gethistorialIncidencias();

tablet.mostrarTablet();

/*
let alumno1 = new Alumno("74394272J","Andres",33,"1ºDAN","Tablet_ejemplo");

alumno1.mostrarDatos(); */

/* ↓ Script para cambiar de color al background al pasar el ratón por encima */

const cuadrado = document.querySelectorAll(".contenerdor-tarjeta");

for(let i = 0; i < cuadrado.length; i++){
    cuadrado[i].addEventListener('mouseover', ()=> hoverImg(i));
    cuadrado[i].addEventListener('mouseout', ()=> hoverReset(i));
}

function hoverImg(j){
    cuadrado[j].style.transform = 'scale(1.1)';    
}
function hoverReset(j){
    cuadrado[j].style.transform = 'scale(1)';
}



//'linear-gradient(150deg,  rgb(138, 32, 224) 15%, rgb(26, 7, 41) 85%)'