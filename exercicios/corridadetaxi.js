/**
 *  exercicio Cálculo do valor de uma corrida de taxi
 *  @author Thiago Nascimento
 * 
 */

const input = require('readline-sync')

// variaveis

let valorc,distancia,valorkm


console.clear()
console.log("Cálculo do valor de uma corrida de taxi")

//entrada 
valorkm = 5
distancia = Number(input.question("distancia percorrida: "))


//processamento

valorc = valorkm * distancia

//saida

console.log(`valor total: ${valorc}`)
