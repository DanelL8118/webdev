const nome = document.getElementById('nome');
const matricula = document.getElementById('matricula');
const curso = document.getElementById('curso');
const resposta = document.getElementById('resposta');
const erroNome = document.getElementById('erroNome');
const erroMat = document.getElementById('erroMat');
const erroCurso = document.getElementById('erroCurso');
const salvar = document.getElementById('formulario');

let teste = true;

function validarCampos (evento) {
evento.preventDefault();

    if (nome.value.trim().length == 0  || matricula.value.trim().length == 0 || curso.value.trim().length == 0 ) {
        
        resposta.textContent = "Preencha todos os campos antes de enviar!";
    }

    else {

        erroNome.textContent = "Nome informado: " + nome.value;
        
        if (isNaN(matricula.value.trim())) { erroMat.textContent = "Informe apenas números!"; teste = false; }
        else { erroMat.textContent = "Matrícula informada: " + matricula.value; teste = true; }

        erroCurso.textContent = "Curso informado: " + curso.value;

        if (teste) { resposta.textContent = "Cadastro realizado com sucesso!"; }
        else { resposta.textContent = "Corrija os campos indicados"; }
    }
}

salvar.addEventListener("submit", validarCampos);