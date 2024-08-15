document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('botaoErro').addEventListener('click', function() {
        mostrarErro('mensagemErro', 'O campo não pode estar vazio');
    });
});

function mostrarErro(elementId, mensagem) {
    var errorMessage = document.getElementById(elementId);
    errorMessage.textContent = mensagem;
    errorMessage.classList.remove('oculto');
    setTimeout(function() {
        errorMessage.classList.add('oculto');
    }, 3000);
}
