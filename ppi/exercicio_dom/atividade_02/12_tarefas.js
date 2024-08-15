document.addEventListener('DOMContentLoaded', function() {
    let idCounter = 1; // Inicia o contador de ID
    const tarefas = []; // Array para armazenar as tarefas

    const descricaoTarefaInput = document.getElementById('descricaoTarefa');
    const tabelaTarefas = document.getElementById('tabelaTarefas').querySelector('tbody');
    const adicionarBtn = document.getElementById('adicionarBtn');

    // Evento de Clique no Botão de Adicionar
    adicionarBtn.addEventListener('click', function() {
        const descricaoTarefa = descricaoTarefaInput.value.trim();

        // Validação da descrição da tarefa
        if (descricaoTarefa === '') {
            alert('A descrição da tarefa não pode estar vazia.');
            return;
        }

        const dataInicio = new Date().toLocaleDateString('pt-BR'); // Data de início

        // Criação do objeto de tarefa
        const tarefa = {
            id: idCounter++,
            descricao: descricaoTarefa,
            dataInicio: dataInicio,
            dataConclusao: ""
        };

        // Adiciona a tarefa ao array de tarefas
        tarefas.push(tarefa);

        // Adiciona a linha correspondente na tabela
        adicionarLinhaNaTabela(tarefa);

        descricaoTarefaInput.value = '';  // Limpa o campo de entrada
    });

    // Função para Adicionar Linhas na Tabela
    function adicionarLinhaNaTabela(tarefa) {
        const novaLinha = document.createElement('tr');
        novaLinha.setAttribute('data-id', tarefa.id); // Define o atributo data-id

        // Cria e preenche as células da linha
        novaLinha.innerHTML = `
            <td>${tarefa.id}</td>
            <td>${tarefa.descricao}</td>
            <td>${tarefa.dataInicio}</td>
            <td>${tarefa.dataConclusao}</td>
            <td>
                <button class="concluirBtn">Concluir</button>
                <button class="excluirBtn">Excluir</button>
            </td>
        `;

        // Adiciona eventos de clique aos botões de concluir e excluir
        const concluirBtn = novaLinha.querySelector('.concluirBtn');
        const excluirBtn = novaLinha.querySelector('.excluirBtn');

        concluirBtn.addEventListener('click', function() {
            concluirTarefa(tarefa.id);
        });

        excluirBtn.addEventListener('click', function() {
            excluirTarefa(tarefa.id);
        });

        // Adiciona a nova linha à tabela
        tabelaTarefas.appendChild(novaLinha);
    }

    // Função para Concluir Tarefas
    function concluirTarefa(id) {
        // Obtém a tarefa pelo ID
        const tarefa = tarefas.find(tarefa => tarefa.id === id);
        if (tarefa) {
            tarefa.dataConclusao = new Date().toLocaleDateString('pt-BR'); // Define a data de conclusão
            const linha = tabelaTarefas.querySelector(`[data-id='${id}']`);
            linha.cells[3].innerText = tarefa.dataConclusao; // Atualiza a célula da data de conclusão
        }
    }

    // Função para Excluir Tarefas
    function excluirTarefa(id) {
        // Encontra o índice da tarefa no array
        const index = tarefas.findIndex(tarefa => tarefa.id === id);
        if (index > -1) {
            tarefas.splice(index, 1); // Remove a tarefa do array
            const linha = tabelaTarefas.querySelector(`[data-id='${id}']`);
            tabelaTarefas.removeChild(linha); // Remove a linha da tabela
        }
    }
});
