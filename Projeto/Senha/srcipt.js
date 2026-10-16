// console.log(Math.random())
// let letras = "abcdefgijklmnopqrstuvwxyz"
// let aleatorio = Math.floor(Math.random() * letras.length)
// console.log(letras[aleatorio])

// ----------------------------------
let minusculas = "abcdefgijklmnopqrstuvwxyz"
let maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let numeros = "0123456789"
let simbolos = "!@#$%()&*_"

function gerarSenha(tamanho, banco) {
    let senha = ""
    for (let e = 0; e < tamanho; e++) {
        let aleatorio = Math.floor(Math.random() * banco.length)
        senha += banco[aleatorio]
    }
    return senha
}
console.log(gerarSenha(8, minusculas + simbolos + maiusculas))

let tamanho = document.getElementById("tamanho")
let gerar = document.getElementById("gerar")
let resultado = document.getElementById("resultado")

gerar.addEventListener("click", function () {
    let tamanhoInput = Number(tamanho.value)
    let banco = montarBanco()
    if(banco ==""){
        resultado.innerText = "Selecione pelo menos um tipo de caractere"
        return
    }
    let senha = gerarSenha(tamanhoInput, banco)

    resultado.innerText = senha
})

let checkMaiusculas = document.getElementById("maiusculas")
let checkMinusculas = document.getElementById("minusculas")
let checkNumeros = document.getElementById("numeros")
let checkSimbolos = document.getElementById("simbolos")

function montarBanco() {
    let banco = ""
    if (checkMaiusculas.checked) {
        banco += maiusculas
    }
    if (checkMinusculas.checked) {
        banco += minusculas
    }
    if (checkNumeros.checked) {
        banco += numeros
    }
    if (checkSimbolos.checked){
        banco += simbolos
    }

    return banco
}

let copiar = document.getElementById("copiar")
copiar.addEventListener("click", async function() {
    let senhaAtual = resultado.textContent

    if (senhaAtual == ""){
        alert("Nenhuma senha gerada")
        return
    }
    await navigator.clipboard.writeText(senhaAtual)
    //  navegador.copiar.oTextoEscrio(variável)
    copiar.innerText = "Copiado!"
    setTimeout(function(){
        copiar.innerText = "Copiar"
    },2000)
})