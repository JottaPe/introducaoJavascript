//Paulo
var Pacientes = document.querySelectorAll(".paciente");
var nome, peso, altura, imc, i, paciente, continua;

// Laço por paciente
for (var i = 0; i < Pacientes.length; i++) {
    paciente = Pacientes[i];
        
    nome = paciente.querySelector(".info-nome").textContent;
    peso = paciente.querySelector(".info-peso").textContent;
    altura = paciente.querySelector(".info-altura").textContent;
    imc = paciente.querySelector(".info-imc");
    
    //Commit
    ValidaPaciente(peso,altura,paciente);
}

// Fórmula IMC
function calcula_imc(Peso,Altura) {
    var imc = (Peso / Math.pow( Altura,2)); 
    return imc.toFixed(2);
}

// Validações
function ValidaPaciente(peso,altura,tr) {
    
    var ok = true;
    if (peso <= 5 || peso >= 500 ) {
        ok = false;
        tr.classList.add("peso-invalido");
    }
    if (altura <= 1 || altura >= 3 ) {
        ok = false;
        tr.classList.add("altura-invalido");
    }
    if (ok){
        tr.querySelector(".info-imc").textContent = calcula_imc(peso,altura);
    }
    else{
        tr.querySelector(".info-imc").textContent = "invalido";
    }
}