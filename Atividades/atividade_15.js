// Exercicio 01 
let triplo = function(ex1num){
    return ex1num * 3
}
let ex1num = Number(prompt("Digite um número:"))
console.log(triplo(ex1num))

// Exercicio 02
let multiplicar = function(ex2num1,ex2num2){
    return ex2num1 * ex2num2
}
let ex2num1 = Number(prompt("Digite um número:"))
let ex2num2 = Number(prompt("Digite um número:"))
console.log(multiplicar((ex2num1,ex2num2)))

// Exercicio 03
let metade = function(ex3num){
    return ex3num / 2 
}
let ex3num = Number(prompt("Digite um número: "))
console.log(metade(ex3num))

// Exercicio 04
let sucessor = function(ex4num){
    return ex4num + 1
}
let ex4num = Number(prompt("Digite um número: "))
console.log(sucessor(ex4num))

// Exercicio 05
let maiorNumero = function(ex5num1, ex5num2){
    if(ex5num1 > ex5num2){
        return ex5num1 , "é o maior"
    } else if (ex5num1 < ex5num2){
        return ex5num2 , "é o maior"
    }
}
let ex5num1 = Number(prompt("Digite um numero: "))
let ex5num2 = Number(prompt("Digite um numero: "))
let resultado = maiorNumero(ex5num1, ex5num2)
console.log(resultado)

// Exercicio 06
let verificarNumero = function(numero){
if(numero < 0){
        return "Negativo"
    } else if (numero > 0){
        return "Positivo"
    } else {
        return "zero"
    }
}
let numero = Number(prompt("Digite um número: "))
console.log(verificarNumero(numero))
// Exercicio 07
let parOuImpar= function(ex7num){
    if(ex7num%2==0){
        return "Par"
    }else{
        return "Impar"
    }
}
let ex7num = Number(prompt("Digite um número: "))
let qualE = parOuImpar(ex8num)
console.log(qualE)

// Exercicio 08
let media = function(ex8num1,ex8num2,ex8num3){
    let media = ex8num1+ex8num2+ex8num3
    
    return media / 3
}
let ex8num1 = Number(prompt("Digite um numero: "))
let ex8num2 = Number(prompt("Digite um numero: "))
let ex8num3 = Number(prompt("Digite um numero: "))
console.log(media(ex8num1,ex8num2,ex8num3))

// Exercicio 09 
let calcularDesconto = function (preco){
    return (preco * 0.15)-preco
}
let preco = Number(prompt("Qual é o valor do produto? "))

// Exercicio 10
let verificarAprovacao = function(nota1,nota2){
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