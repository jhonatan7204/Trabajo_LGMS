const inicio = document.querySelector('.titulo-encabezado');

inicio.addEventListener("click", saludar);

function saludar(){
    alert("hola mundo");

}

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
}