document.addEventListener('DOMContentLoaded', function () {
    var botaoExibir = document.getElementById('botaoExibir');
    botaoExibir.addEventListener('click', exibirConteudo);
});

function exibirConteudo() {
    var conteudo = document.getElementById('caixaDeTexto').value.trim(); // Retira os espaços em branco

    if (conteudo === "") { // Verifica se a string é nula ou vazia
        mostrarErro('mensagemErro', 'O campo de texto não pode estar vazio.');
    } else {
        document.getElementById('conteudo').innerHTML = conteudo;
    }
}

function mostrarErro(elementId, mensagem) {
    var errorMessage = document.getElementById(elementId);
    errorMessage.textContent = mensagem;
    errorMessage.classList.remove('oculto');
    setTimeout(function() {
        errorMessage.classList.add('oculto');
    }, 3000);
}
