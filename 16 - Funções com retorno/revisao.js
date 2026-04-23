function saudacao(nome){
    return "Bom dia "+ nome 
}
// let nome = prompt("Qual seu nome")
// let aux = saudacao(nome)
// console.log(aux)
// console.log(saudacao(nome)) // Forma sem auxiliar

function soma(n1, n2){
    let resultado = n1 + n2
    return resultado
    // return n1 + n2 //assim tamtém funciona
}
// let n1 = Number(prompt("Primeiro número: "))
// let n2 = Number(prompt("Segundo número"))
// let auxiliar = soma(n1,n2)
// console.log(auxiliar)

// Classificação de temperatura
function previsaoDoTempo(temperatura){
    if(temperatura>30){
        return "calor"
    } else if (temperatura < 12) {
        return "frio"
    } else {
        return "ok"
    }
}
let temperatura = Number(prompt("Qual e a temperatura: "))
let previsao = previsaoDoTempo(temperatura)
console.log(previsao)
console.log(previsaoDoTempo(temperatura))

/* Pergunte um salário para o funcionario, se for menor que 2500 dê 500 reais de aumento e mostre o novo salário, senão, mostre, "Sem aumento" */

function Classificacao(salario) {
    if (salario<2500){
        let aumento = salario + 500
        return aumento
    } else {
        return "Sem aumento"
    }
}
let salario = Number(prompt("Qual salario?"))
console.log(Classificacao(salario))

/* Peça um número para o aumento, e mostre uma procentagem dele, se o número  for menor ou igual a 100, mostre 10% do valor, se for menor ou igual a 1000, mortre 35% do valor, senão, mostre "sem porcentagem" */
function Analise(porcentagem){
    let reducao
    if(porcentagem <= 100){
        reducao = porcentgem * 0.1
        return reducao
    }else {
        reducao = orcentagem * 0.35
        return reducao
    }
}
let porcentagem = Number(prompt("Digite um número"))
console.log(Analise(porcentagem))