const senha = document.getElementById('senha');
const resultado = document.getElementById('resultado');
const salvar = document.getElementById('novasenha');
const resposta = document.getElementById('resposta');

let teste = false;

function testeSenha(evento) {
evento.preventDefault();

teste = false;

    if ( senha.value.trim().length < 8) {

        resultado.textContent = "A senha deve ter no mínimo 8 caracteres";
    }
    
    else {
        
        resultado.textContent = "Tudo certo";
        teste = true;
    }

}

function salvarSenha(evento2) {
evento2.preventDefault();

    if (teste) { resposta.textContent = "Senha salva com sucesso"; }
    else { resposta.textContent = "Senha não atende ao critério"; }
}

senha.addEventListener("input",testeSenha);
salvar.addEventListener("submit", salvarSenha);