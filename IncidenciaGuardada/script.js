try{
    document.querySelector(".boton.numero2").addEventListener("click", () =>{
        window.location = "../index.html";
    });
}catch(e) {
    
}

console.log(director.mostrarDirector());

texto = director.mostrarDirector();

let contenedor = document.querySelector(".textoJ");
contenedor.innerText = texto;


