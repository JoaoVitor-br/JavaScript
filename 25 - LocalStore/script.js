let input = document.getElementById("input")
let salvar = document.getElementById("salvar")
let mensagem = document.getElementById("mensagem")
let nomeSalvo

salvar.addEventListener("click", function() {
    mensagem.innerText = "Oi " + input.value
    localStorage.setItem("nome", input.value)
    let nomeSalvo = localStorage.getItem("nome")
    
})