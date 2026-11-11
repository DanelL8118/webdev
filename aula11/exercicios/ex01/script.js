const botao = document.querySelector("#button");
const resposta = document.querySelector("#resultado");

let cliques=0;

function clique (evento) {
    evento.preventDefault();

    cliques++;
    resposta.textContent = "Cliques = " + cliques;    

}

botao.addEventListener("click", clique);