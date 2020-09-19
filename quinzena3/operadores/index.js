/* Exercício 1 - As respostas impressas no console foram:
 a. false
 b. false
 c. true
 e. boolean
 */

/* Exercício 2 - As respostas impressas no console foram:

a. undefined
b. null
c. 11
d. 3
e (11) [3,19,5,6,7,8,9,10,11,12,13]
f. 9
*/


let idade = prompt("Qual é a sua idade?")

let idadeAmiga = prompt("Qual a sua idade Maria?")

console.log("Minha idade é", idade, "anos")

console.log("Minha idade é", idadeAmiga, "anos")



let idade = prompt("Qual é a sua idade?")

let idadeAmiga = prompt("Qual a sua idade Maria?")

let a1 = idade == idadeAmiga == false
let a2 = idade > idadeAmiga == true
let a3 = idade < idadeAmiga == false

let diferença1 = idade > idadeAmiga

console.log("Sua idade é maior do que a de Maria?", diferença1)




let idade = prompt("Qual é a sua idade?")

let idadeAmiga = prompt("Qual a sua idade Maria?")

let diferença2 = Number(idade) - Number(idadeAmiga)

console.log("A diferença de idade é: ", diferença2)


let par = prompt("Insira um número par:")

let resposta = par%2 

console.log("A resposta é: ", resposta)

/* O padrão é que o resto é sempre 0. */

/* Se inserir um número ímpar, a resposta sempre será com algum resto de divisão. */



let listaDeTarefas = []

listaDeTarefas.push(prompt("Insira uma tarefa do seu dia-a-dia:"))
listaDeTarefas.push(prompt("Insira uma tarefa do seu dia-a-dia:"))
listaDeTarefas.push(prompt("Insira uma tarefa do seu dia-a-dia:"))

console.log(listaDeTarefas)

let indice = prompt("Digite 0 se já realizou a primeira tarefa, ou 1 se já a segunda tarefa, ou 2 se já realizou a terceira tarefa:")

listaDeTarefas.splice(indice, 1)

console.log(listaDeTarefas)





let nomeDoUsuario = prompt("Qual é o seu nome?")

let emailDoUsuario = prompt("Qual é o seu e-mail?")

console.log("O e-mail ", emailDoUsuario, "foi cadastrado com sucesso. ", "Seja bem-vindo(a) ", nomeDoUsuario)






