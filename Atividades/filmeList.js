let tarefa = document.getElementById("tarefa")
let adicionar = document.getElementById("adicionar")
let lista = document.getElementById("lista")
let tarefas = []

//Pegando as tarefas Salvas
//pegar as tarefas do localStorage
let tarefaSalva = localStorage.getItem("tarefas")

if (tarefaSalva) {
    tarefas = JSON.parse(tarefaSalva)
} else {
    tarefas = []
}

function mostrarTarefas() {


    // Apaga se já tinha algo antes
    lista.innerText = ""

    tarefas.forEach(function (tarefaAtual, indice) {
        //Criar um na lista
        let item = document.createElement("li")
        item.innerText = tarefaAtual
        item.classList.add("item")

        // Criar contador de item
        let contador = document.createElement("input")
        contador.type = "Number"
        // frase pra acompanhar
        let frase = document.createElement("p")
        frase.innerText = "Acentos"

        //Criar um botão
        let apagar = document.createElement("button")
        // apagar.innerHTML = '<img src="" alt=""'
        apagar.innerText = "Apagar"
        // Quando clicar apagar atarefa
        apagar.addEventListener("click", function () {
            //remove essa tarefa do array
            tarefas.splice(indice, 1)
            //Atualiza o localStorage
            localStorage.setItem("tarefas", JSON.stringify(tarefas))
            mostrarTarefas()
        })
        // colocamos as coisas no LI
        item.appendChild(contador)
        item.appendChild(frase)
        item.appendChild(apagar)

        // colocamos o LI no UL
        lista.appendChild(item)
    });

}
// adicionar a tarefa
adicionar.addEventListener("click", function () {
    // Aviso de ausencia de filme
    let aviso = document.getElementById("aviso")
    //Pega o que foi digitado
    let novaTerefa = tarefa.value
    //Verifica se não está vazio
    if (novaTerefa != "") {
        tarefas.push(novaTerefa)

        localStorage.setItem("tarefas", JSON.stringify(tarefas))

        tarefa.value = ""
        mostrarTarefas()

    } else {
        // Mostra o aviso
        aviso.style.display = 'block';

        // Esconde o aviso após 3 segundos (3000 milissegundos)
        setTimeout(() => {
            aviso.style.display = 'none';
        }, 1500);
    }
})
mostrarTarefas()