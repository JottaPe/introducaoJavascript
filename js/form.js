var Salvar = document.querySelector("#adicionar-paciente");
Salvar.addEventListener("click",Gravar);

function Gravar(event) {
    
    var form = document.querySelector("#paciente");
    
    event.preventDefault();
    // Obtem dados do form paciente 
    paciente = ObtemPacientesDoForm(form);
    
    // Cria elementos HTML 
    EnviaPaciente(paciente);

    form.reset();
}

function ObtemPacientesDoForm(form) {
    var paciente = {
        nome : form.nome.value,
        peso : form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc : 0
    }

    paciente.imc = calcula_imc(paciente.peso,paciente.altura);
    
    return paciente;
    
}

function EnviaPaciente(paciente) {
    var tabela,pacienteTr;

    pacienteTr = document.createElement("tr");
    pacienteTr.className = "paciente";

    pacienteTr.appendChild(MontaTD(paciente.nome, "info-nome"));
    pacienteTr.appendChild(MontaTD(paciente.peso, "info-peso"));
    pacienteTr.appendChild(MontaTD(paciente.altura, "info-altura"));
    pacienteTr.appendChild(MontaTD(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(MontaTD(paciente.imc, "info-imc"));
    
    tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
        
    ValidaPaciente(paciente,pacienteTr);
}

function MontaTD(dado,classe) {
    var td = document.createElement("td");
    td.textContent = dado
    td.classList.add(classe)

    return td;
}