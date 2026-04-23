
// Exercicio 01 
function dobro (numero) {
    let aux = numero * 2
    console.log("O dobro é", aux)
}
let numero = Number(prompt("Digite um numero: "))
dobro(numero)

// Exercicio 02 
function calcularArea(base,altura){
    let area = base * altura
    console.log("A area da figura é ",area)
}
let altura = Number(prompt("Qual é a altura da figura? "))
let base = Number(prompt("Qual à base da figura? "))

calcularArea(base,altura)

// Exercicio 03
function converterParaFahrenheit(celsius) {
    let fahrenheit = (celsius * 1.8 + 32)
    console.log("Isso em fahrenheit é ",fahrenheit)
}
let celsius = Number(prompt("Qual e a temperatura atual? "))
converterParaFahrenheit(celsius)
// Exercicio 04
function verificarNota(nota){
    if(nota>=7){
        console.log("Passou")
    }else if(nota< 7 && nota >= 5){
        console.log("Recuperação")
    }else if(nota < 5){
        console.log("Reprovado")
    }
}
let nota = Number(prompt("Qual é a sua nota?"))
verificarNota(nota)

// Exercicio 05
function verificarNumero(num0){
    if (num0 > 0){
        console.log("Numero positivo")
    } else if (num0 < 0){
        console.log("Numero negativo")
    } else {
        console.log("Numero zero")
    }
}
let num0 = prompt("Digite um numero: ")
verificarNumero(num0)

// Exercicio 06
function contarPares(par){
    for(let e = 0;e >= par;e++){
        if(par%2==0){
            console.log(par)
        }
    }
}
let par = Number(prompt("Digite um numero: "))
contarPares(par)

// Exercicio 07
function  somarIntervalo(numInicio,numFim){
    let soma = 0
    while(numInicio <= numFim){
        soma = numInicio + soma
        numInicio++
    }
    console.log(soma)
}
let numInicio = Number(prompt("Defina o inicio: "))
let numFim = Number(prompt("Defina o fim: "))
somarIntervalo(numInicio,numFim)

// Exercicio 08
function repetirNome(repetir,nome){
    for(let e = 1;e <= repetir;e++){
        console.log(nome)
    }
}
let nome = prompt("Digite um nome: ")
let repetir = Number(prompt("Quantas vezes quer repetir"))
repetirNome(repetir,nome)

// Exercicio 09
function tabuada(tabuada){
    for(let e = 1; e<=10;e++){
        console.log((tabuada*e))
    }
}
let tabuada = Number(prompt("Qual tabuada quer ver?"))
tabuada(tabuada)

// Exercicio 10
function contagemPersonalizada(regressar){
    for(let e = 0;regressar>= e;regressar--){
        console.log(regressar)
    }
}
let regressar = Number(prompt("Digite um numero: "))
contagemPersonalizada(regressar)

// Exercicio 11
function mediaAluno(num1, num2) {
    let media = (num1 + num2)/2
    if(media>=7){
        console.log("Passou")
    }else if(media< 7 && media >= 5){
        console.log("Recuperação")
    }else if(media < 5){
        console.log("Reprovado")
    }

}
let num1 = Number(prompt("Digite um numero: "))
let num2 = Number(prompt("Digite outro numero: "))
mediaAluno(num1,num2)