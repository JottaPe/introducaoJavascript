//Paulo
var Pacientes = document.querySelectorAll(".paciente");
var element, paciente, continua;

// Laço por paciente
for (var i = 0; i < Pacientes.length; i++) {
    element = Pacientes[i];
    
    paciente = {
        nome: element.querySelector(".info-nome").textContent,
        peso: element.querySelector(".info-peso").textContent,
        altura: element.querySelector(".info-altura").textContent,
        imc: element.querySelector(".info-imc"),
    }
    
    //Commit
    ValidaPaciente(paciente,element); 
}

// Fórmula IMC
function calcula_imc(Peso,Altura) {
    var imc = (Peso / Math.pow( Altura,2)); 
    return imc.toFixed(2);
}

// Validações
function ValidaPaciente(paciente,tr) {
    
    var ok = true;
    if (paciente.peso <= 5 || paciente.peso >= 500 ) {
        ok = false;
        tr.classList.add("peso-invalido");
    }
    if (paciente.altura <= 1 || paciente.altura >= 3 ) {
        ok = false;
        tr.classList.add("altura-invalido");
    }
    if (ok){
        tr.querySelector(".info-imc").textContent = calcula_imc(paciente.peso,paciente.altura);
    }
    else{
        tr.querySelector(".info-imc").textContent = "invalido";
    }
}
