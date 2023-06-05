for (let i = 0; i < profesores.length; i++) {
      texto = profesores[i].mostrarProfe(); 
      let contenedor = document.querySelector(".profesores");
      contenedor.innerText = texto;
    }

  
  
