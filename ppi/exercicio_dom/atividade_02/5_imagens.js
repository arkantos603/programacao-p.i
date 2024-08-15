document.addEventListener('DOMContentLoaded', function() {
    var seletorImagens = document.getElementById('seletorImagens');
    seletorImagens.addEventListener('change', function() {
        var imagemSelecionada = seletorImagens.value;
        
        if (imagemSelecionada) {
            var img = document.createElement('img');
            img.src = imagemSelecionada;
            var resultado = document.getElementById('resultado');
            resultado.innerHTML = '';  // Limpa a div antes de adicionar a nova imagem
            resultado.appendChild(img);
        } else {
            var resultado = document.getElementById('resultado');
            resultado.innerHTML = '';  // Limpa a div se não houver seleção
        }
    });
});
