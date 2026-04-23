// // laço de repetição - While
// let i = 1
// while (i <= 5) {
//     console.log(i)
//     i++
// }
// console.log("---------------------------")
// let resposta = prompt("Deseja acessar o sistema? ")
// while (resposta == "sim") {
//     console.log("Bem vindo ao sistema")
//     resposta = prompt("Deseja continuar no sistema? ")
// }
// console.log("---------------------------")
// let senha = prompt("Digite sua senha: ")
// while (senha != "senai2026") {
//     senha = prompt("senha incorreta. Tente novamente:")
// }
// console.log("Acesso liberado")
// console.log("---------------------------")
// /* Peça para o usuário 3 números, some eles e mostre o resultado da soma */
// let soma = 0
// let aux = 1
// while (aux <= 3) {
//     let numero = Number(prompt("Digite um número"))
//     soma = soma + numero

//     aux++
// }
// console.log("O resultado é: ", soma)
// console.log("---------------------------")
// /* Peça para o usuário as credenciais de acesso, enquanto as credenciais não forem iguais a login == "TDS2" e a senha == "senai, continue perguntando" */
// let login = prompt("Qual o login?")
// let senha2 = prompt("Qual a senha?")
// while (login != "TDS2" || senha2 != "senai") {
//     login = prompt("Qual o login?")
//     senha2 = prompt("Qual a senha?")
// }
// console.log("Pode acessar")
// console.log("------------------------------")
// let x = 1
// while (x <= 10) {
//     console.log(x)
//     x++
// }
// console.log("------------------------------")
// let magica = prompt("Qual a palavra mágica? ")
// while(magica != "abracadabra"){
//     magica = prompt("Errou. Qual a palavra magica?")
// }
// console.log("Acertou")

// Peça três números e mostre a multiplicação deles
let controlador = 1
let mult = 0
let num
while (controlador <= 3){
    num = Number(prompt("Informe o "+controlador+"° numero"))
    mult = mult * num
    console.log(mult)
    controlador++
}
    console.log("O resultado é: ",mult)

