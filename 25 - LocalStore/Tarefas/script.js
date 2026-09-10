let tarefa = document.getElementById("tarefa")
let adicionar = document.getElementById("adicionar")
let lista = document.getElementById("lista")
let tarefas = []

//Pegando as tarefas Salvas
//pegar as tarefas do localStorage
let tarefaSalva = localStorage.getItem("tarefas")

if(tarefaSalva) {
    tarefas = JSON.parse(tarefaSalva)
} else {
    tarefas = []
}

function mostrarTarefas() {
    // Apaga se já tinha algo antes
    lista.innerText = ""

    tarefas.forEach(function(tarefaAtual, indice) {
        //Criar um na lista
        let item = document.createElement("li")
        item.innerText = tarefaAtual
        item.classList.add("item")

        //Criar um botão
        let apagar = document.createElement("button")
        // apagar.innerHTML = '<img src="" alt=""'
        apagar.innerText = "Apagar"
        // Quando clicar apagar atarefa
        apagar.addEventListener("click",function(){
            //remove essa tarefa do array
            tarefas.splice(indice,1)
            //Atualiza o localStorage
            localStorage.setItem("tarefas",JSON.stringify(tarefas))
            mostrarTarefas()
        })
        // colocamos o botão no LI
        item.appendChild(apagar)
        // colocamos o LI no UL
        lista.appendChild(item)
    });
}
// adicionar a tarefa
adicionar.addEventListener("click", function () {
    //Pega o que foi digitado
    let novaTerefa = tarefa.value
    //Verifica se não está vazio
    if (novaTerefa != "") {
        tarefas.push(novaTerefa)

        localStorage.setItem("tarefas", JSON.stringify(tarefas))

        tarefa.value = ""
        mostrarTarefas()

    }
})
mostrarTarefas()