/**
 * Ficha de um aluno de academia 
 * @author Thiago Nascimento
 */

//variaveis 
let nome 
let idade
let peso
let altura
let vip 
let fcm
let imc 
// entrada de dados
console.clear()
nome = "Thiago Nascimento"
idade = 19
peso = 65
altura = 1.72
vip = true

//processamento
fcm = 208 - (0.7 * idade)
imc = peso / (altura * altura)

// saida
console.log("ficha do aluno")
console.log("_______________________")
console.log(`nome:${nome}`)
console.log(`idade: ${idade}`)
console.log(`peso: ${peso}`)
console.log(`altura: ${altura}`)
console.log(`Vip: ${vip}`)
console.log(`FCM: ${fcm}`)
console.log(`ICM: ${imc.toFixed(2)}`)