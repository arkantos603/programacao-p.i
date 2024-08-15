document.addEventListener('DOMContentLoaded', function() {
    var botaoCarregar = document.getElementById('botaoCarregar');
    botaoCarregar.addEventListener('click', function() {
        var uploadImagem = document.getElementById('uploadImagem');
        var arquivoSelecionado = uploadImagem.files[0];
        
        if (arquivoSelecionado) {
            var img = document.createElement('img');
            img.src = URL.createObjectURL(arquivoSelecionado);
            var resultado = document.getElementById('resultado');
            resultado.innerHTML = '';  
            resultado.appendChild(img);
        } else {
            alert('Por favor, selecione uma imagem.');
        }
    });
});