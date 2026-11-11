const formulario = document.querySelector("#cadastro");
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const idade = document.querySelector("#idade");
const erroNome = document.querySelector("#erro-nome");
const erroEmail = document.querySelector("#erro-email");
const erroIdade = document.querySelector("#erro-idade");
const resultado = document.querySelector("#resultado");

function validarCadastro(evento) {
    evento.preventDefault();
    // Limpa as mensagens anteriores
    erroNome.textContent = "";
    erroEmail.textContent = "";
    erroIdade.textContent = "";
    resultado.textContent = "";
    let valido = true;

    // Validação do nome
    if (nome.value.trim().length < 3) {
        erroNome.textContent = "Informe pelo menos 3 caracteres.";
        valido = false;
    }

    // Validação do e-mail
    if (email.validity.valueMissing) {
        erroEmail.textContent = "O e-mail é obrigatório.";
        valido = false;
    } else if (email.validity.typeMismatch) {
        erroEmail.textContent = "Informe um e-mail válido.";
        valido = false;
    }
    
    // Validação da idade
    if (idade.validity.valueMissing) {
        erroIdade.textContent = "A idade é obrigatória.";
        valido = false;
    } else if (!idade.validity.valid) {
        erroIdade.textContent = "Informe uma idade válida entre 16 e 120.";
        valido = false;
    }
    
    if (valido) {
        resultado.textContent = "Cadastro realizado com sucesso!";
    }
}
formulario.addEventListener("submit", validarCadastro);