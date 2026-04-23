
// Exercicio 01
let num =1
do{
    console.log(num)
    num++
}while(num <=20)

// Exercicio 02
let resposta
do {
    resposta = prompt("Deseja continuar?(s/n)")
}while(resposta =="s")

// Exercicio 03
let sequencia = 1
let informado = Number(prompt("Ate quando a sequencia vai seguir? "))
do{
    console.log(sequencia)
    sequencia++
}while(sequencia<=informado)

// Exercicio 04
let dois_em_dois = 1
do{
    console.log(dois_em_dois)
    dois_em_dois+=2
}while(dois_em_dois<=31)

// Exercicio 05
let analise 
sequencia =1
do{
    analise = Number(prompt("Digite qualquer numero: "))
    if(analise>0){
        console.log("NÚMERO POSITIVO")
    }else if(analise<0){
        console.log("NÚMERO NEGATIVO")
    }else{
        console.log("O NÚMERO É ZERO")
    }
    sequencia++
}while(sequencia<=5)

// Exercicio 06
let sim_ou_nao 
let num1
let num2
do{
    num1 = Number(prompt("Digite um número:"))
    num2 = Number(prompt("Digite outro numero número:"))
    console.log("A soma deles é ",(num1+num2))
    sim_ou_nao = prompt("Deseja continuar?(sim/não)")
}while(sim_ou_nao != "não")

// Exercicio 07 
sequencia = 1
do{
    console.log("Estudando JavaScript")
    sequencia++
}while(sequencia <=10)

// Exercicio 08
let positivista = Number(prompt("Digite um numero:"))
do{
    positivista = Number(prompt("Denovo. Digite um outro numero:"))
}while(positivista <=0)

// Exercicio 09 
let senha 
do{
    senha = prompt("Digite sua senha: ")
}while(senha !="senai2026")
    console.log("Acesso liberado")

// Exercicio 10 
let somando 
let somado = 0
let continuar 
do{
    somando = Number(prompt("Digite um numero: "))
    somado = somado + somando
    continuar = prompt("Deseja continuar?(s/n)")
}while(continuar !="n")