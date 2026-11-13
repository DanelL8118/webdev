const resultado = document.querySelector("#resultado");
const link = document.querySelector("#link");

function cancelarLink(evento) {
    evento.preventDefault();
    resultado.textContent = "Navegação para o link cancelada!"
}
link.addEventListener("click", cancelarLink);