// Exercicio 01 
let idade = Number(prompt("Quantos anos voce tem: "))
let Cnh = prompt("Voce tem CNH: ")
console.log(idade >= 18 && Cnh == "sim")

// Exercicio 02 
let nota = Number(prompt("Qual e a sua nota: "))
let faltas = Number(prompt("Quantos dias voce faltou"))
console.log(nota >= 6 && faltas >= 10)

// Exercicio 03
idade = Number(prompt("Quantos anos voce tem: "))
let convite = prompt("Voce tem convite: ")
console.log(idade >= 18 && convite == "sim")

// Exercicio 04
let salario = Number(prompt("Quanto voce recebe: "))
let limpo = prompt("Voce tem o nome limpo: ")
console.log(salario >= 2500 && limpo == "sim")

// Exercicio 05
convite = prompt("Voce tem convite: ")
let nome_lista = prompt("Voce tem o nome na lista: ")
console.log(nome_lista == "sim" || convite == "sim")

// Exercicio 06
let conta = Number(prompt("Quanto ficou a conta: "))
let vip = prompt("Voce tem o vip: ")
console.log(conta >= 2500 && vip == "sim")

// Exercicio 07
nota = Number(prompt("Qual e a sua nota: "))
let extra = (prompt("Voce fez o trabalho extra: "))
console.log(nota >= 5 && extra == "sim")

// Exercicio 08
let senha = prompt("Qual e a sua senha: ")
let digital = prompt("A digital batel(true/false):")
console.log(senha == "12323"&& digital == true)

// Exercicio 09
let bloqueado = (senha == "12323"&& digital == true)
console.log(bloqueado)

// Exercicio 10 
let temCadastro = prompt("Fez o cadastro(true/false): ")
console.log("O cadastro foi realisado: ",temCadastro
)

// Exercicio 11
let usuario = prompt("digite o seu usuario: ")
console.log(usuario == "Admin")
let Senha = prompt("digite a senha: ")
console.log(Senha == "244466666")

// Exercicio 12
let Nome_lista = prompt("Seu nome esta limpo: ")
let Conta = Number(prompt("QUal o valor da conta: "))
let Cartao = prompt("Tem o cartão da loja: ")
console.log(Nome_lista == "sim"&& Conta >=200 && Cartao =="sim")

// Exercicio 13
let Documento = prompt("Entregou a matricula: ")
let Idade_escola = Number(prompt("Qual a sua idade: "))
let Matricula = prompt("Pagou a matricula: ")
console.log(Documento == "sim"&& CoIdade_escolanta >=17 && Matricula =="sim")

// Exercicio 14
let Membro = prompt("Como voce esta relacionado com o clube: ")
let clube = Number(prompt("Qual a sua idade: "))
console.log((Membro == "convidado"|| Menbro =="socio")&& clube >=17 )