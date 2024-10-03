// * Selecionar as TAGS

const inputText = document.getElementById('task');
const taskList = document.getElementById('task-list');
const btnAdd = document.getElementById('btnAdd');

// * Conectar o btnADD a uma função VIA JS
// * function() {} função anônima

btnAdd.addEventListener('click', function () {
    addTask();
})

// * Função - Conectada ao botão 

function addTask() {
    // ^ value em um input = Valor digitado ou valor dentro da caixa de texto
    if (inputText.value == '') {
        alert("Você precisa asicionar a descrição da tarefa");
    }
    else {
        // ? ELSE = A PESSOA DIGITOU O NOME DA TAREFA
        // * CRIANDO UMA TAG E SALVANDO EM UMA VARIÁVEL
        // * createElement() CRTA UMA TAG
        // * uma novo LI = uma nova tarefa

        let li = document.createElement("li");

        // * o conteúdo do li recebe o que a pessoa digitou 

        li.innerHTML = inputText.value;

        // ^ appendChild = adiciona uma tag dentro de outra
        // ^ no caso o novo <li> é colocado dentro do <ul> taskList

        taskList.appendChild(li);
    }
    // * lIMPANDO CAIXO DE TEXTO PARA A PRÓXIMA TAREFA
    inputText.value = '';
}