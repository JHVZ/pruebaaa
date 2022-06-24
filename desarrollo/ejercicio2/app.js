tabla = document.getElementById("registros");

function verificardato(){
    var vacio = false,
        producto= document.getElementById("producto").value,
        precio = document.getElementById("Precio").value,
        cantidad = document.getElementById("Cantidad").value;
        
        if(producto == ""){
            alert("Inserta el nombre del producto");
            vacio = true;
        }else if(precio == ""){
            alert("inserta el precio delproducto");
            vacio = true;
        }else if(cantidad == ""){
            alert("inserte un precio");
            vacio = true;
        }
            return vacio;
}
    
function agregar(){
    if(!verificardato()){
        var nuevatabla = tabla.insertRow(tabla.length),
        cel1 = nuevatabla.insertCell(0),
        cel2 = nuevatabla.insertCell(1),
        cel3 = nuevatabla.insertCell(2),
        cel4 = nuevatabla.insertCell(3),
        producto = document.getElementById("producto").value,
        precio = document.getElementById("Precio").value,
        cantidad = document.getElementById("Cantidad").value,
        total= precio*cantidad;
        cel1.innerHTML = producto;
        cel2.innerHTML = precio;
        cel3.innerHTML = cantidad;
        cel4.innerHTML = total;        

    
    selectedRowToInput();
    }
}   
function borrar(){
    tabla.remove();
            
}
