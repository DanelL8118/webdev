const botao = document.querySelector("#botao");
function saudar(evento) {
    console.log("Tipo:"

        , evento.type);

    console.log("Elemento:"

        , evento.target);

    alert("Você clicou no botão: " + evento.target.textContent);
}
botao.addEventListener("click"

    , saudar);