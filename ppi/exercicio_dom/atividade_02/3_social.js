document.addEventListener('DOMContentLoaded', function() {
    var botaoCalcular = document.getElementById('botaoCalcular');
    botaoCalcular.addEventListener('click', calcularTaxaEngajamento);
});

function calcularTaxaEngajamento() {
    var interacoes = document.getElementById('interacoes').value.trim();
    var visualizacoes = document.getElementById('visualizacoes').value.trim();

    if (interacoes === "" || visualizacoes === "") {
        mostrarErro('mensagemErro', 'Todos os campos devem ser preenchidos.');
        return;
    }

    if (isNaN(interacoes) || isNaN(visualizacoes)) {
        mostrarErro('mensagemErro', 'Por favor, insira valores numéricos válidos.');
        return;
    }

    var interacoesNum = parseFloat(interacoes);
    var visualizacoesNum = parseFloat(visualizacoes);

    if (visualizacoesNum === 0) {
        mostrarErro('mensagemErro', 'O número de visualizações não pode ser zero.');
        return;
    }

    var taxaEngajamento = (interacoesNum / visualizacoesNum) * 100;
    document.getElementById('resultado').innerHTML = "Taxa de Engajamento: " + taxaEngajamento.toFixed(2) + "%";
}

function mostrarErro(elementId, mensagem) {
    var errorMessage = document.getElementById(elementId);
    errorMessage.textContent = mensagem;
    errorMessage.classList.remove('oculto');
    setTimeout(function() {
        errorMessage.classList.add('oculto');
    }, 3000);
}
