document.addEventListener('DOMContentLoaded', function() {
    let idCounter = 1;
    const tarefas = [];

    const descricaoTarefaInput = document.getElementById('descricaoTarefa');
    const tabelaTarefas = document.getElementById('tabelaTarefas').querySelector('tbody');
    const adicionarBtn = document.getElementById('adicionarBtn');

    adicionarBtn.addEventListener('click', function() {
        const descricaoTarefa = descricaoTarefaInput.value.trim();

        if (descricaoTarefa === '') {
            alert('A descrição da tarefa não pode estar vazia.');
            return;
        }

        const dataInicio = new Date().toLocaleDateString('pt-BR');

        const tarefa = {
            id: idCounter++,
            descricao: descricaoTarefa,
            dataInicio: dataInicio,
            dataConclusao: ""
        };

        tarefas.push(tarefa);
        adicionarLinhaNaTabela(tarefa);

        descricaoTarefaInput.value = '';
    });

    function adicionarLinhaNaTabela(tarefa) {
        const novaLinha = document.createElement('tr');
        novaLinha.setAttribute('data-id', tarefa.id);

        novaLinha.innerHTML = `
            <td>${tarefa.id}</td>
            <td>${tarefa.descricao}</td>
            <td>${tarefa.dataInicio}</td>
            <td>${tarefa.dataConclusao}</td>
            <td>
                <button class="concluirBtn">Concluir</button>
                <button class="reabrirBtn" style="display:none;">Reabrir</button>
                <button class="excluirBtn">Excluir</button>
            </td>
        `;

        const concluirBtn = novaLinha.querySelector('.concluirBtn');
        const excluirBtn = novaLinha.querySelector('.excluirBtn');
        const reabrirBtn = novaLinha.querySelector('.reabrirBtn');

        concluirBtn.addEventListener('click', function() {
            concluirTarefa(tarefa.id, concluirBtn, reabrirBtn, excluirBtn);
        });

        reabrirBtn.addEventListener('click', function() {
            reabrirTarefa(tarefa.id, concluirBtn, reabrirBtn, excluirBtn);
        });

        excluirBtn.addEventListener('click', function() {
            excluirTarefa(tarefa.id);
        });

        tabelaTarefas.appendChild(novaLinha);
    }

    function concluirTarefa(id, concluirBtn, reabrirBtn, excluirBtn) {
        const tarefa = tarefas.find(tarefa => tarefa.id === id);
        if (tarefa) {
            tarefa.dataConclusao = new Date().toLocaleDateString('pt-BR');
            const linha = tabelaTarefas.querySelector(`[data-id='${id}']`);
            linha.cells[3].innerText = tarefa.dataConclusao;

            concluirBtn.style.display = 'none';
            reabrirBtn.style.display = 'inline-block';
            excluirBtn.disabled = true; // Desabilita o botão de excluir
        }
    }

    function reabrirTarefa(id, concluirBtn, reabrirBtn, excluirBtn) {
        const tarefa = tarefas.find(tarefa => tarefa.id === id);
        if (tarefa) {
            tarefa.dataConclusao = "";
            const linha = tabelaTarefas.querySelector(`[data-id='${id}']`);
            linha.cells[3].innerText = tarefa.dataConclusao;

            concluirBtn.style.display = 'inline-block';
            reabrirBtn.style.display = 'none';
            excluirBtn.disabled = false; // Habilita o botão de excluir
        }
    }

    function excluirTarefa(id) {
        const tarefa = tarefas.find(tarefa => tarefa.id === id);

        if (tarefa.dataConclusao) {
            alert('Tarefas concluídas não podem ser excluídas.');
            return;
        }

        if (confirm('Tem certeza de que deseja excluir esta tarefa?')) {
            const index = tarefas.findIndex(tarefa => tarefa.id === id);
            if (index > -1) {
                tarefas.splice(index, 1);
                const linha = tabelaTarefas.querySelector(`[data-id='${id}']`);
                tabelaTarefas.removeChild(linha);
            }
        }
    }
});
