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

/* habilitar botón y enlazar */


const form = document.querySelector("#form");
const boton = document.querySelector("#btn");

function validar(){
    let desabilitar = false;

    if(form.txt_1.value == ""){
        desabilitar = true;
    }
    if(form.txt_2.value == ""){
        desabilitar = true;
    }
    if(desabilitar == true){
        boton.disabled = true;
        document.getElementById("btn").style.background = "linear-gradient(150deg, rgb(255, 255, 255)30%, rgb(255, 255, 255)70%)";
        document.getElementById("btn").style.color = "black";
        document.getElementById("btn").style.height = "200px";
        document.getElementById("btn").style.cursor = "pointer";
    } else{
        boton.disabled = false;         
    }
}

form.addEventListener("keyup",validar);

try{
    document.querySelector(".boton-alumno").addEventListener("click",() =>{
        window.location = "../pagina alumno/pagina_alumno.html";
    });
} catch(e){
    
}

try{
    document.querySelector(".boton-admin").addEventListener("click",() =>{
        window.location = "../pagina admin/pagina_admin.html";
    });
} catch(e){
    
}

try{
    document.querySelector(".boton-profesor").addEventListener("click",() =>{
        window.location = "../pagina_profesor/pagina_profesor.html";
    });
} catch(e){
    
}

try{
    document.querySelector(".boton-director").addEventListener("click",() =>{
        window.location = "../pagina director/pagina_director.html";
    });
} catch(e){
    
}

try{
    document.querySelector(".boton.numero2").addEventListener("click", () =>{
        window.location = "../index.html";
    });
}catch(e){

}
/* **** */

/*
let alumno1 = new Alumno("74394272J","Andres",33,"1ºDAN","Tablet_ejemplo");

alumno1.mostrarDatos(); */
