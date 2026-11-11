const nome = document.querySelector("#nome");
const resultado = document.querySelector("#resultado");

function saudar() {
    resultado.textContent = "Olá, " + nome.value;
}

nome.addEventListener("input", saudar);