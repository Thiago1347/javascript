/**
 * calculo de cosnumo de agua
 * @author Thiago Nascimento
 */

const input = require("readline-sync")
console.log(typeof(input))

let consumo, peso

//console.clear()

peso = Number(input.question("Digite o seu peso: em kg:" ))

consumo = peso * 0.035

console.log (`Consumo diario de agua deve ser:${consumo.toFixed(3)}`)
