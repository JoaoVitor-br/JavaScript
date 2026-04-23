

// Exercicio 01 
let idade = Number(prompt("Quantos anos você tem?"))
let situacao = idade >=18 ? "Maior de idade":"Menor de idade"
console.log(situacao2)

// Exercicio 02
let im_par = Number(prompt("Digite um número: "))
let par_im = (im_par % 2) = 0 ? "Par" : "Imapar"
console.log(par_im)

// Exercicio 03
let nota = Number(prompt("qual foi a sua nota? "))
let nota_final = nota >=  6 ? "Aprovado" : "Reprovado"
console.log(nota_final)

// Exercicio 04 
let saldo = Number(prompt("Quanto você tem de saldo? "))
let analise = saldo > 0 ? "Saldo positivo" : saldo <= 0 ? "Saldo negativo" : "Valor invalido"
console.log(analise)

// Exercicio 05 
let conta = Number(prompt("Qual foi o valor da sua conta? "))
let desconto = conta >= 100 ? "você vai receber 10% de desconto" : "Você não teve desconto"
console.log(desconto)

// Exercicio 06
let idade2 = Number(prompt("Quantos anos você tem?"))
let entrada = idade2 >= 18 ? "Entrada permitida" : "Entrada negada"
console.log(entrada)

// Exercicio 07
let usuario = prompt("Qual e o seu usuario")
let acesso = usuario == "admin" ? "Acesso liberado" : "Acesso negado"
console.log(acesso)

// Exercicio 08
let temperatura = Number(prompt("Quantos graus está?"))
let carlor = temperatura >=30 ? "A muitps carlores" : "Não esta carlor"
console.log(carlor)

// Exercicio 09 
let num1 = Number(prompt("Digite um número: "))
let polu = num1 > 0 ? "Positivo" : num1 < 0 ? "Negativo" : "Zero"
console.log(polu)

// Exercicio 10
let idade0 = Number(prompt("Quantos anos você tem? "))
let fases = idade0 < 12 ? "Criança" : idade0 < 18 ? "Adolescente" : idade0 < 60 ? "adulto" : "Idoso"
console.log(fases)

// Exercicio 11 
let veloicidade = Number(prompt("qual era a sua velocidade? "))
let teste = veloicidade <= 80 ? "Dentro do limite" : "Multado"
console.log(teste)

// exercicio 12 
let valor = Number(prompt("Quanto ficou o valor da conta? "))
let limite = Number(prompt("Qual e o limite do cartão? "))
let pagamento = valor < limite ? "Compra aprovada" : "Compra negada"
console.log(pagamento)

// exercicio 13
let pontuacao = Number(prompt("Qual foi a sua pontuação?"))
let score = pontuacao < 100 ? "Iniciante" : pontuacao < 500 ? "Intermediario" : pontuacao < 1000 ? "Avançado" : "Mestre" 
