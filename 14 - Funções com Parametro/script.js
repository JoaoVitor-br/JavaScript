// Declarativa sem parametro e retorno
function saudacao() {
    let nome = prompt("Qual é o seu nome?")
    console.log("Bom dia ", nome)
}
// saudacao()

// Declarativa com parâmetro
function saudacao2(nome2) {
    console.log("Bom dia ", nome2)
}
// let nome2 = prompt("Qual e o seu nome?")
// saudacao2()

function soma(num1, num2) {
    let soma = num1 + num2
    console.log("A soma é: ", soma)
}
// let num1 = Number(prompt("Digite um numero: "))
// let num2 = Number(prompt("Digite outro numero: "))
// soma(num1,num2)

function maioride(idade){
        if (idade >= 18) {
            prompt.log("Voce e maior de idade.")
    }else {
        prompt.log("Voce é menor de idade.......")
    }
}
// maioride(12)
// maioride(21)

/* Peça um número para o usúario, crie uma função que calcule o dobro e mostre o resutado */
function dobro (numero) {
    let aux = numero * 2
    console.log("O dobro é", aux)
}
// let numero = Number(prompt("Digite um numero: "))
// dobro(numero)

/* Uma empresa soliccitou em sistema de aumento para os funcionarios, crie uma função que recebe um salário, se ele for menor que 2500, dê 500 reais de aumento e mostre o novo salário, senão, apenad mostre, "sem aumento" */
function aumento(salario){
    if (salario< 2500){
        let novoSalaraio = salario + 500
        console.log("O seu salario justado é ",novoSalaraio)
    }
    else{
        console.log("Sem aumento")
    }
}
// let salario = Number(prompt("Qual o salário? "))
// aumento(salario)

/* Crie uma função para controle de alunos, a função deve mostrar o nome, a idade, e o curso que faz no Senai */
function dados(nome2 , idade2, curso){
    console.log(nome2, " tem ",idade2," anos e cursa ",curso)
}
let nome2 = prompt("Qual e o seu nome? ")
let idade2 = Number(prompt("Quantos anos voce tem? "))
let curso = prompt("Qual e o seu curso")