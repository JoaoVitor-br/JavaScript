// Exercicio 01
let dobro = (ex1Numero) =>{
    return ex1Numero *2
}
let ex1Numero = Number(prompt("Digite um Numero: "))
console.log(dobro(ex1Numero))

// Exercicio 02
let somar = (ex2Numero1,ex2Numero2) => {
    return ex2Numero1 + ex2Numero2
}
let ex2Numero1 = Number(prompt("Digite um Numero: "))
let ex2Numero2 = Number(prompt("Digite um Numero: "))
console.log(somar(ex2Numero1,ex2Numero2))

// Exercicio 03 
let quadrado = (ex3Numero) =>{
    return ex3Numero * ex3Numero
}
let ex3Numero = Number(prompt("Digite um Numero: "))
console.log(quadrado(ex3Numero))

// Exercicio 04
let sucessor = (ex4Numero) => {
    return ex4Numero + 1
}
let ex4Numero = Number(prompt("Digite um Numero: "))
console.log(sucessor(ex4Numero))

// Exercicio 05
let maiorNumero = (ex5Numero1,ex5Numero2) => {
    if(ex5Numero1>ex5Numero2){
        return ex5Numero1
    } else if(ex5Numero1<ex5Numero2){
        return ex5Numero2
    }
}
let ex5Numero1 = Number(prompt("Digite um Numero: "))
let ex5Numero2 = Number(prompt("Digite um Numero: "))
console.log(somar(ex5Numero1,ex5Numero2))

// Exercicio 06
let parOuImpar = (parImpar) => {
    if(parImpar%2==0){
        return "Par"
    }else{
        return "Impar"
    }
}
let parImpar =Number(prompt("Digite um Numero: "))
console.log(parOuImpar(parImpar))

// Exercicio 07
let verificarNumero = (ex7Numero) =>{
    if(ex7Numero < 0){
        return "Negativo"
    } else if (ex7Numero > 0){
        return "Positivo"
    } else {
        return "zero"
    }
}
let ex7Numero = Number(prompt("Digite um número: "))
console.log(verificarNumero(ex7Numero))

// Exercicio 08
let media = (ex7num1,ex7num2,ex7num3) => {
    let media = ex7num1+ex7num2+ex7num3
    
    return media / 3
}
let ex7num1 = Number(prompt("Digite um numero: "))
let ex7num2 = Number(prompt("Digite um numero: "))
let ex7num3 = Number(prompt("Digite um numero: "))
console.log(media(ex7num1,ex7num2,ex7num3))

// Exercicio 09
let calcularDesconto = (preco) => {
    return (preco * 0.20)-preco
}
let preco = Number(prompt("Qual é o valor do produto? "))

// Exercicio 10
let verificarAprovacao = (nota1,nota2)=>{
    let media = (nota1 + nota2) /2
    if(media >= 7){
        return "Passou"
    } else if (media >= 5 && media < 7){
        return "Recuperação"
    } else {
        return "Reprovado"
    }
}
let nota1 = Number(prompt("Digite a sua nota:"))
let nota2 = Number(prompt("Digite a sua nota:"))
console.log(verificarAprovacao(nota1,nota2))