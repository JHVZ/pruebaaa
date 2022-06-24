function Calcular(n1, n2, n3, n4, notaexamen){
    var n1 = parseFloat(document.getElementById("nota1").value);
    var n2 = parseFloat(document.getElementById("nota2").value);
    var n3 = parseFloat(document.getElementById("nota3").value);
    var n4 = parseFloat(document.getElementById("nota4").value);
    var notaexamen = parseFloat(document.getElementById("notaexamen").value);
    
    let notaParcial = (n1 *0.15 + n2 *0.25 + n3 *0.3 + n4 *0.3)
    
    if(notaParcial >=5.0){
        document.getElementById("promedio").innerText = notaParcial;
        document.write("Eximido con un: "+ notaParcial);
    }else{
        let notaFinal = notaParcial*0.7 + notaexamen*0.3;
        if(notaFinal >=5.0){
            document.getElementById("promedio").innerText = notaFinal;
            document.write("Eximido con un: "+ notaFinal);
        }else{
            document.getElementById("promedio").innerText = notaFinal;
            document.write("Reprobado con un: "+ notaFinal);
        }
    }
}











