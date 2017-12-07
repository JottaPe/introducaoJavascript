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
