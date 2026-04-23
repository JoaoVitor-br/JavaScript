// Exercicio 01
function dobro(ex1num){
    return ex1num * 2
}
let ex1num = Number(prompt("Digite um numero: "))
console.log(dobro(ex1num))

// Exercicio 02
function somar(ex2num1,ex2num2){
    return ex2num1 + ex2num2
}
let ex2num1 = Number(prompt("Digite um numero: "))
let ex2num2 = Number(prompt("Digite outro numero"))
console.log(somar(ex2num1,ex2num2))

// Exrcicio 03 
function areaQuadrado(ex3lado1,ex3lado2){
    return ex3lado1 * ex3lado2
}
let ex3lado1 = Number(prompt("Digite um numero: "))
let ex3lado2 = Number(prompt("Digite outro numero: "))
console.log(areaQuadrado(ex3lado1,ex3lado2))

// Exercicio 04
function antecessor (ex4num){
    return ex4num - 1
}
let ex4num = Number(prompt("Digite um numero: "))
console.log(antecessor(ex4num))

// Exercicio 05
function tamanhoTexto(contador){
    return contador.length
}
let contador = prompt("digite qual quer coisa")
let demonstra = tamanhoTexto(contador)
console.log(demonstra)

// Exercicio 06
function maiorNumero(ex6num1, ex6num2){
    if(ex6num1 > ex6num2){
        return ex6num1 , "é o maior"
    } else if (ex6num1 < ex6num2){
        return ex6num2 , "é o maior"
    }
}
let ex6num1 = Number(prompt("Digite um numero: "))
let ex6num2 = Number(prompt("Digite um numero: "))
let resultado = maiorNumero(ex6num1, ex6num2)
console.log(resultado)

// Exercicio 07
function verificarIdade(idade){
    if (idade >=18){
        return "Maior de idade"
    }else{
        return "Menor de idade"
    }
}
let idade = Number(prompt("Quantos anos você tem? "))
let varificado = verificarIdade(idade)

// Exercicio 08
function parOuImpar(ex8num){
    if(ex8num%2==0){
        return "Par"
    }else{
        return "Impar"
    }
}
let ex8num = Number(prompt("Digite um número: "))
let qualE = parOuImpar(ex8num)
console.log(qualE)

// Exercicio 09 
function media(ex9num1,ex9num2,ex9num3){
   let media = (ex9num1+ex9num2+ex9num3)/3
   return "A media é", media
}
let ex9num1 = Number(prompt("Digite um numero: "))
let ex9num2 = Number(prompt("Digite outro numero: "))
let ex9num3 = Number(prompt("Digite um outro numero: "))
let mediaFinal = media(ex9num1,ex9num2,ex9num3)
console.log(mediaFinal)

// Exercicio 10
function calcularDesconto(preco){
    let desconto = (preco*0.1)-preco
    return "Com o desconto ficou ", desconto
}
let preco = Number(prompt("Qual é o preço do produto? "))
let precoFinal = calcularDesconto(preco)
console.log(precoFinal)
 
