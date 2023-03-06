window.onbeforeunload = function() {
    return "¿Estás seguro que quieres salir?";
};
let edad = prompt ("Ingrese su edad");
if (parseInt(edad) >= 18){
alert ("Sos mayor, podes ingresar al sitio web")
}
else{
    alert ("Sos menor, ingresaras al sitio web bajo tu responsabilidad")
}

var opcion = prompt ("¿Se encuentra en San Nicolas o en un radio dentro de 40km?")
if (opcion=="si") {
    alert ("El servicio a domicilio no tiene costo")
}
else{
    alert ("El costo del servicio a domicilio será de $800")
}



