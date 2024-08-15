document.addEventListener('DOMContentLoaded', function() {
    var enviarBtn = document.getElementById('enviarBtn');
    enviarBtn.addEventListener('click', function() {
        // Obtém todos os checkboxes com o nome 'redesSociais'
        var redesSociais = document.getElementsByName('redesSociais');
        var selecionadas = [];
        var mensagemErro = document.getElementById('mensagemErro');
        var redesSelecionadas = document.getElementById('redesSelecionadas');

        // Limpa a mensagem de erro e as redes selecionadas
        mensagemErro.innerHTML = '';
        redesSelecionadas.innerHTML = '';

        // Verifica se pelo menos um checkbox está marcado
        var algumSelecionado = false;
        for (var i = 0; i < redesSociais.length; i++) {
            if (redesSociais[i].checked) {
                selecionadas.push(redesSociais[i].value);
                algumSelecionado = true;
            }
        }

        if (algumSelecionado) {
            redesSelecionadas.innerHTML = 'Redes sociais selecionadas: ' + selecionadas.join(', ');
        } else {
            mensagemErro.innerHTML = 'Por favor, selecione pelo menos uma rede social.';
            mensagemErro.classList.remove('oculto'); // Exibe a mensagem de erro
        }
    });
});
