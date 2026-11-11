/*const formulario = document.querySelector("#formulario");
const nome = document.querySelector("#nome");
const resultado = document.querySelector("#resultado");

function validarFormulario(evento) {
    evento.preventDefault();
    if (nome.value.trim() === "") {
        resultado.textContent = "Informe seu nome!";
    }
    else {
        resultado.textContent = "Cadastro realizado!\n" + nome.value + " inserido!";
    }
}
formulario.addEventListener("submit", validarFormulario); */

const formulario = document.querySelector("#formulario");
const nome = document.querySelector("#nome");
const resultado = document.querySelector("#resultado");

function validarFormulario(evento) {
    evento.preventDefault();
    if (nome.value.trim() === "") {
        resultado.textContent = "Informe seu nome!";
    }
    else {
        resultado.textContent = "Cadastro realizado!\n" + nome.value + " inserido!";
    }
}
formulario.addEventListener("submit", validarFormulario);

formulario.removeEventListener("submit", validarFormulario);