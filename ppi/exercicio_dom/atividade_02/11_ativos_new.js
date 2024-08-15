document.addEventListener('DOMContentLoaded', function() {
    var moverParaDireitaBtn = document.getElementById('moverParaDireitaBtn');
    var moverParaEsquerdaBtn = document.getElementById('moverParaEsquerdaBtn');
    var ativosDisponiveis = document.getElementById('ativosDisponiveis');
    var carteiraInvestimentos = document.getElementById('carteiraInvestimentos');

    function moverItens(origem, destino) {
        var selecionados = Array.from(origem.selectedOptions);
        if (selecionados.length === 0) {
            alert('Selecione pelo menos um item para mover.');
            return;
        }
        selecionados.forEach(function(opcao) {
            destino.appendChild(opcao);
        });
        atualizarEstadoBotoes();
    }

    function atualizarEstadoBotoes() {
        moverParaDireitaBtn.disabled = ativosDisponiveis.selectedOptions.length === 0;
        moverParaEsquerdaBtn.disabled = carteiraInvestimentos.selectedOptions.length === 0;
    }

    // Adiciona ouvintes para mudar o estado dos botões quando a seleção muda
    ativosDisponiveis.addEventListener('change', atualizarEstadoBotoes);
    carteiraInvestimentos.addEventListener('change', atualizarEstadoBotoes);

    moverParaDireitaBtn.addEventListener('click', function() {
        moverItens(ativosDisponiveis, carteiraInvestimentos);
    });

    moverParaEsquerdaBtn.addEventListener('click', function() {
        moverItens(carteiraInvestimentos, ativosDisponiveis);
    });

    // Adiciona alguns ativos iniciais para exemplo
    var ativos = [
        { value: 'AAPL', text: 'Apple (AAPL)' },
        { value: 'GOOGL', text: 'Google (GOOGL)' },
        { value: 'AMZN', text: 'Amazon (AMZN)' },
        { value: 'MSFT', text: 'Microsoft (MSFT)' },
        { value: 'TSLA', text: 'Tesla (TSLA)' },
        { value: 'BRK.B', text: 'Berkshire Hathaway (BRK.B)' },
        { value: 'FB', text: 'Meta (FB)' },
        { value: 'V', text: 'Visa (V)' },
        { value: 'JNJ', text: 'Johnson & Johnson (JNJ)' },
        { value: 'WMT', text: 'Walmart (WMT)' }
    ];

    ativos.forEach(function(ativo) {
        var option = document.createElement('option');
        option.value = ativo.value;
        option.textContent = ativo.text;
        ativosDisponiveis.appendChild(option);
    });

    // Inicializa o estado dos botões
    atualizarEstadoBotoes();
});
