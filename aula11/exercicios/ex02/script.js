const azul = document.querySelector("#azul");
const verde = document.querySelector("#verde");
const vermelho = document.querySelector("#vermelho");
const resultado = document.querySelector("#resultado");

function mudarCor (evento) {
    evento.preventDefault();

        if (azul) { document.getElementById("resultado").style.backgroundColor="#2DD7E3"; }
        if (vermelho) { document.getElementById("resultado").style.backgroundColor="#E82D10"; }
        if (verde) { document.getElementById("resultado").style.backgroundColor="#2DE35B"; }

}

//botao.addEventListener("click", mudarCor)

azul.addEventListener("click", mudarCor);
verde.addEventListener("click", mudarCor);
vermelho.addEventListener("click", mudarCor);