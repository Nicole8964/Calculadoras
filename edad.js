function calculateEDAD(){
    var edadmascota = document.getElementById('edad').value;
    var edadhumana = (16 * Math.log(edadmascota) + 31);
    document.getElementById('resultado').textContent = "La edad de tu mascota en años humanos es:" + " " + edadhumana.toFixed(0);
}
function calculateEdad(){
    var edadmascota = document.getElementById('edad').value;
    var edadhumana = edadmascota * 7;
    document.getElementById('resultado').textContent = "La edad de tu mascota es:" + " " + edadhumana.toFixed(0);
}
function resetearEdad(){
    document.getElementById('edad').value = type ="number";
    document.getElementById('resultado').textContent = "";
}