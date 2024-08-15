document.addEventListener('DOMContentLoaded', function() {
    var moverParaDireitaBtn = document.getElementById('moverParaDireitaBtn');
    var moverParaEsquerdaBtn = document.getElementById('moverParaEsquerdaBtn');
    var ativosDisponiveis = document.getElementById('ativosDisponiveis');
    var carteiraInvestimentos = document.getElementById('carteiraInvestimentos');

    function moverItens(origem, destino) {
        var selecionados = Array.from(origem.selectedOptions);
        selecionados.forEach(function(opcao) {
            destino.appendChild(opcao);
        });
    }

    moverParaDireitaBtn.addEventListener('click', function() {
        moverItens(ativosDisponiveis, carteiraInvestimentos);
    });

    moverParaEsquerdaBtn.addEventListener('click', function() {
        moverItens(carteiraInvestimentos, ativosDisponiveis);
    });
});
