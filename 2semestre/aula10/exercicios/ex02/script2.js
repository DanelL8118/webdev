const azul = document.querySelector("#azul");
const verde = document.querySelector("#verde");
const vermelho = document.querySelector("#vermelho");
const resultado = document.querySelector("#resultado");

azul.addEventListener("click", function() {

resultado.style.backgroundColor = "dodgerblue"
})

verde.addEventListener("click", function() {

resultado.style.backgroundColor = "green";

})

vermelho.addEventListener("click", function() {

resultado.style.backgroundColor = "firebrick"
})