//Boton hacia arriba funcion//

// Scroll up//


document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp(){

    var currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0){
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, currentScroll - (currentScroll / 1));
    }
}




buttonUp = document.getElementById("button-up");

window.onscroll = function(){

    var scroll = document.documentElement.scrollTop;

    if (scroll > 500){
        buttonUp.style.transform = "scale(1)";
    }else if(scroll < 500){
        buttonUp.style.transform = "scale(0)";
    }

}



//Validacion de formulario//


const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje")
const boton = document.getElementById("btn-enviar");
const resultado = document.getElementById("resultado"); 


boton.addEventListener("click",(a) =>{
    a.preventDefault();
    let error = ValidarCampos();
    if(error[0]){
        resultado.innerHTML = error[1];
        resultado.classList.add("red");
    }else{
        resultado.innerHTML = "Mensaje Enviado Correctamente";
        resultado.classList.add("green");
        resultado.classList.remove("red");

    }
})

const ValidarCampos = () =>{
    let error = [];

    if(nombre.value.length < 5 ) {
        error[0] = true;
        error[1] = "El nombre no puede contener menos de 5 caracteres. ";
        return error;
    }else if (nombre.value.length > 40 ){
        error[0] = true;
        error[1] = "El nombre no puede contener mas de 40 caracteres. ";
        return error;

    }else if (email.value.length < 5 ||
              email.value.length > 40||
              email.value.indexOf("@") == -1 ||
              email.value.indexOf(".") == -1){
                error[0] = true;
                error[1] = "el mail es invalido";
                return error;
              }
              else if(mensaje.value.length == 0){
                error[0] = true;
                error[1] = "Debe escribir un mensaje. ";
                return error;
            }
                
    error[0] = false;
    return error;
}

