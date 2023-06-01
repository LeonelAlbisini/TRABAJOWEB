let divcaptcha= document.querySelector(".captcha");
let mostrar= document.querySelector(".resultado");
let submit= document.querySelector("#submit-button");
let recargar = document.querySelector("#recargar");
if(submit&&recargar){
    submit.addEventListener("click", comprobarCaptcha);
    recargar.addEventListener("click", recargarCaptcha);
}



let boton_ocultar=document.querySelector(".boton_barra");
boton_ocultar.addEventListener("click", ocultarBarra);
let barra_navegacion=document.querySelector(".nav-bar");


let Caracteres = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
'S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r'
,'s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];

function Captcha(){
    for (i=0;i<6;i++){
      let captcha = Caracteres[Math.floor(Math.random() * Caracteres.length)];
            divcaptcha.innerHTML += `${captcha}`;
     }
    }
//Captcha();

function recargarCaptcha(){
    divcaptcha.innerHTML = "";
    Captcha();
}
function comprobarCaptcha(e){
    e.preventDefault();
    let valorDeCaptcha = document.querySelector(".ingreso_captcha").value;
    if(valorDeCaptcha==divcaptcha.innerText){
        console.log("entre al if");
        mostrar.classList.add("correcto");
        mostrar.innerHTML = "Captcha correctamente"
        setTimeout(function(){
            submit.form.submit(); 
        },2000)
    }
    else{
        console.log("entre al else");
        mostrar.innerHTML = "Captcha incorrecto, volver a ingresar"

    }
}


function ocultarBarra(){
    barra_navegacion.classList.toggle("ocultar");
    
}