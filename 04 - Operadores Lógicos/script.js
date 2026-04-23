// 04 -Operadores logicos
// && - e - tudo tem que ser verdade
// || - ou - apenas uma coisa dev ser verdade
// ! - não - inverte o resultado
let idada = 18
let convite = true
console.log(idade >= 18 && convite ==true)

console.log("--------------------------------")
let dia = "quinta"
console.log(dia =="sabado" || dia == "domingo")

console.log("--------------------------------")
let valor = 20
console.log(valor >= 10 && valor <= 99)

console.log("--------------------------------")
let bloqueado = false
console.log(!bloqueado)

console.log("--------------------------------")
let numero = Number(prompt("Informe um numero:"))
console.log

/* Para fazer login em um computador do Senai, o usuário
deve ser "TDS2" e a senha "senai2026". Faça o código que
pergunte as credenciais para o usuário e mostre se ele
consegue ou nao acessar */
let usuario = prompt("digite o seu usuario: ")
let senha = prompt("Digite a sua senha: ")
if(usuario== "TDS2",senha =="1234"){
    prompt("Acesso permitido")
}else{
    prompt("Acesso negado")
}

/* Para ser aprovado  o aluno precisa ter nota maior ou igual a 50 e ter a frequência maior ou igual a 75.
Peça as informações para o usuário e veja se ele será aprovado*/

let nota = Number(prompt("Qual e a sua nota: "))
let frequencia = Number(prompt("Qual e a sua frequência: "))
console.log(nota >=50 && frequencia>=75)

/* Para assistir um filme de terror no cinema, é preciso ter idade maior ou igual a 14 ou estar acompanhado do responsável*/
let idade = Number(prompt("Quantos anos você tem: "))
let aconpanhado = prompt("Você esta aconpanhado do seu responsavel: ")
console.log(idade >= 14 || responsavel == "sim")

/* Para fazer academia do Sesi você deve ser aluno do sesi ou do senai e pagar a mensaliadade */
let escola = prompt("De qual escola você é: ")
let mensaliadade = prompt("Voce paga mensaliadade: ")
console.log((escola =="senai" || escola == "sesi") && mensaliadade == "sim")

/* Pergunte para o usuário se ele tem internet (true/false)e moste */
let internet = prompt("Voce tem internet(True or False): ")
console.log(internet== "true")
console.log(internet)
