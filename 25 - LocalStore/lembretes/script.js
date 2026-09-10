let lembrete = document.getElementById("lembrete")
let salvar = document.getElementById("salvar")
let apagar = document.getElementById("apagar")
let mensagem = document.getElementById("mensagem")

let lembreteSalvo = localStorage.getItem("lembrete")
if(lembreteSalvo) {
    mensagem.innerText = lembreteSalvo
}

salvar.addEventListener("click", function(){
    localStorage.setItem("lembrete", lembrete.value)
    mensagem.innerText = lembrete.value
})
apagar.addEventListener("click", function(){
    localStorage.removeItem("lembrete")
    mensagem.innerText = ""
})