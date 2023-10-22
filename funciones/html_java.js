function mandaDatos(){
    let username = malkus08
    let password = malkus0808
    let div_mensaje = document.getElementById("mensaje")
    let nombre = document.getElementById("nombre").value;
    let password = document.getElementById("contrasena").value
    
    /*let long_caracteres = nombre.length;//longitud del texto incluyendo espacios//
    
    if(long_caracteres > 0){
        div_mensaje.innerHTML = "<p> Its Ok </p>"
    }else{
        div_mensaje.innerHTML = "<p> Mal contenido </p>"
    }
}*/
if(nombre === "" && password === ""){
    div_mensaje.innerHTML = "<p> Mal contenido </p>"
    }else{
    div_mensaje.innerHTML = "<p> Its Ok </p>"
    }
if(nombre === username && password === contrasena ){
    div_mensaje.innerHTML = "<p> Correct </p>"
}
}
