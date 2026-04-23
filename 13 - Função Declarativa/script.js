// function soma(){
//     let num1 = Number(prompt("Qual o primeiro número: "))
//     let num2 = Number(prompt("Qual o segundo número: "))
//     console.log(num1+num2)
// }
// soma()

// function saudacao(){
//     console.log("Bom dia")
// }
// console.log("------------------------------")
// function inicializacao(){
//     let nome = prompt("Qual seu nome? ")
//     console.log("Bem vindo ao site ",nome)
// }
// inicializacao()
/* Uma escola solicitou um sistema de aprovação de alunos, crie uma função, peça duas notas para o usuário, calcule a média e se for igual ou maior a 7 , mostre "Aprovado", senão mostre "Reprovado". Chame a função 2 vezes */
// function Aprovado(){
//     let nota1 = Number(prompt("Digite a primeira nota: "))
//     let nota2 = Number(prompt("Digite a segunda nota: "))
//     let media = (nota1 + nota2)/2
//     if(media >= 7){
//         console.log("Aprovado")
//     }else{
//         console.log("Reprovado")
//     }
// }
// Aprovado()
// Aprovado()
/* Foi solicitado um sistema para classificar a pontuação de um jogo, crie uma função que peça a pontuação do jogador, se for igual ou maior a 3000 mostre "Vencedor", se for maior a 2200 mostre "Segundo lugar", se for maior ou igual a 1800, mostre "Terceiro lugar" ,senão mostre, "Não foi dessa vez" */
function jogo(){
    let pontuacao = Number(prompt("Digite a pontuação do jogador: "))
    if(pontuacao >= 3000){
        console.log("Vencedor")
    }else if(pontuacao > 2200){
        console.log("Segundo lugar")
    }else if(pontuacao >= 1800){
        console.log("Terceiro lugar")
    }else{
        console.log("Não foi dessa vez")
    }
}
jogo()