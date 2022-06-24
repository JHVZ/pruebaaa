function ingresar(){
    var validar = document.getElementById("validar").value;
    if (validar <= 5000){
        alert("El valor minimo de la apuesta es de $5000");
    }
}