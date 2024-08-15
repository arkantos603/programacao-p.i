document.addEventListener('DOMContentLoaded', function() {
    var adicionarBtn = document.getElementById('adicionarBtn');
    var inputHashtag = document.getElementById('inputHashtag');
    var listaHashtags = document.getElementById('listaHashtags');
    
    adicionarBtn.addEventListener('click', function() {
        var hashtag = inputHashtag.value.trim();
        
        if (hashtag === '') {
            alert('Por favor, digite uma hashtag.');
            return;
        }
        
        // Cria um novo elemento <option>
        var novaHashtag = document.createElement('option');
        novaHashtag.textContent = hashtag;
        novaHashtag.value = hashtag;
        
        // Adiciona a nova hashtag ao <select>
        listaHashtags.appendChild(novaHashtag);
        
        // Limpa o campo de entrada
        inputHashtag.value = '';
        
        // Limita o número de hashtags visíveis a 5
        if (listaHashtags.options.length > 5) {
            listaHashtags.remove(0); // Remove a primeira opção se houver mais de 5
        }
    });
});
