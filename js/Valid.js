// Validações
function ValidaPaciente(paciente,tr) {
    var imc = tr.querySelector(".info-imc")
   
    if (!ValidaPeso(paciente)) {
        tr.classList.add("peso-invalido");
        imc.textContent = "Peso inválido";
    }
    else if (!ValidaAltura(paciente)) {
        tr.classList.add("altura-invalido");
        imc.textContent = "Altura inválida";
    }
    else{
        imc.textContent = calcula_imc(paciente)
    }
}

function ValidaPeso(paciente){
    var retorno = true;
    if (paciente.peso <= 5 || paciente.peso >= 500 ) {
        retorno = false;
    }
    return retorno;
}

function ValidaAltura(paciente){
    var retorno = true;
    if (paciente.altura <= 1 || paciente.altura >= 3 ) {
        retorno = false;
    }
    return retorno;
}   

// Fórmula IMC
function calcula_imc(paciente) {
    var imc = (paciente.peso / Math.pow( paciente.altura,2)); 
    return imc.toFixed(2);
}

function PreCommit(paciente){
    var x = paciente, retorno = true;
    
    if (!PesoValido(x)) {
        retorno = false;
    } 
    if (!AlturaValida(x)) {
        retorno = false;
    }
    return retorno
}

function PesoValido(paciente){
    if (paciente.peso < 0) {
        alert("Peso negativo não é permitido!")
        return false ;
    }
    else{
        return true;
    }
}

function AlturaValida(paciente){
    if (paciente.altura < 0) {
        alert("Altura negativa não é valida!")
        return false;
    }
    else{
        return true;
    }
}
