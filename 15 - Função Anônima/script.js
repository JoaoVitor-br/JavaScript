// Declarativa
function soma1(num1,num2){
    return num1+num2
}
let num1 = 43
let num2 = -34
console.log(soma1(num1,num2))

// Anônima
let soma2 = function(num3,num4){
    return num3 + num4
}
let num3 = 12
let num4 = 4
console.log(soma2(num3,num4))

//Saudação
let bomDia = function(nome){
    return "Bom dia "+ nome 
}
// let nome = prompt("Qual é seu nome: ")
// console.log(bomDia(nome))

// Multiplicar três números
let multiplicar = function(n1,n2,n3){
    return n1 *n2 *n3
}
let n1 = Number(prompt("Digite um número"))
let n2 = Number(prompt("Digite um número"))
let n3 = Number(prompt("Digite um número"))

console.log(multiplicar((n1,n2,n3)))

/* Peça uma temperatura, se tiver acima de 30 diga "calor", se tiver abaixo de 12 diga "frio", senão, diga "ok" */
let previsaoDoTempo = function(temperatura){
    if(temperatura > 30){
        return "calor"
    }else if (12 > temperatura){
        return "Frio"
    } else {
        return "ok"
    }
}
let temperatura = Number(prompt("Qual a temperatura? "))
console.log(previsaoDoTempo(temperatura))

/* Peça um salário, se ele for menor ou igual a 2500 dê 700 reais de aumento, senão  */
let aumento = function(salario){
    if (salario <= 2500) {
        return salario + 700
    }else if (salario <= 3200) {
        return salario + 300
    } else {
         return "sem aumento"
    }
}
let salario = Number(prompt("Qual o salário?"))
console.log(aumento(salario))

