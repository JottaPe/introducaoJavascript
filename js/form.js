var Salvar = document.querySelector("#adicionar-paciente");
Salvar.addEventListener("click",Gravar);

function Gravar(event) {
    
    var form = document.querySelector("#paciente");
    
    event.preventDefault();
    // Obtem dados do form paciente 
    paciente = ObtemPacientesDoForm(form);
    
    // Cria elementos HTML 
    EnviaPaciente(paciente);
    
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
    var tabela, imcTd, nomeTd, pesoTd, alturaTd, gorduraTd,pacienteTr;

    pacienteTr = document.createElement("tr");
    pacienteTr.className = "paciente";

    nomeTd = document.createElement("td");
    nomeTd.className ="info-nome";

    pesoTd = document.createElement("td");
    pesoTd.className = "info-peso"; 

    alturaTd = document.createElement("td");
    alturaTd.className = "info-altura";

    gorduraTd = document.createElement("td");
    gorduraTd.className = "info-gordura";

    imcTd = document.createElement("td");
    imcTd.className = "info-imc";

    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);
    
    tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
    
    ValidaPaciente(paciente.peso,paciente.altura,pacienteTr);
}