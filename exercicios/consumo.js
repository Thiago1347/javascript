/**
 *  Calculo do consumo de combustivel
 *  @author Thiago Nascimento
 */

const input = require ('readline-sync')

console.clear()
console.log(" Calculo do consumo de combustivel")

//variaveis
let distancia ,litros ,consumo

//entrada 
distancia= Number(input.question("distancia percorrida : "))
litros = Number (input. question ("quantidade de litros : "))
consumo = distancia /litros 

//saida 

console.log(`Consumo de veiculo: ${consumo.toFixed(1)} km`)
