var botaoAdicionar = document.getElementById('adicionar');
var inputTarefa = document.getElementById('tarefa');

inputTarefa.onkeypress = function(event) {
    console.log(event);
};

botaoAdicionar.onkeypress = function(evento) {
    if (evento.key === 'Enter') {
        // adicionar a tarefa
        adicionar();
    }
    console.log(evento);
}

botaoAdicionar.addEventListener('click', adicionar);

function adicionar() {
    var tarefa = inputTarefa.value;

    if (tarefa !== '') {
        var li = document.createElement('li');
        li.innerText = tarefa;
        // FORMA 1 ESTILO IN LINE
        // li.style.color = 'red';

        //li.onclick = function() {
        //   li.style.color = 'green';
        //};
        //li.ondblclick = function() {
        //   li.style.color = 'red';
        //};

        // FORMA 2 POR MEIO DE CLASSES
        li.classList.add('para-fazer');
        li.onclick = function() {
            li.classList.remove('para-fazer');
            li.classList.add('concluida');
        };
        li.ondblclick = function() {
            li.classList.remove('concluida');
            li.classList.add('para-fazer');
        }

        var botaoExcluir = document.createElement('button');
        botaoExcluir.innerText = "Excluir"
        botaoExcluir.onclick = function() { ol.removeChild(li) }

        li.appendChild(botaoExcluir);



        //  li.innerText = inputTarefa.value;

        var ol = document.getElementById('tarefas');
        ol.appendChild(li);

        inputTarefa.value = '';
    }
}