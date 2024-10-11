/**
 * Alcool x Gasolina
 * @author Thiago Nascimento 
*/

const input = require ('readline-sync')

console.clear()
console.log("Calculo gasolina x alcool")

let gasolina,alcool,calculo


gasolina = Number(input.question("Digite o valor da gasolina:"))
alcool = Number(input.question("Digite o  valor do alcool:"))

 calculo = alcool/gasolina
console.log(`calculo: ${calculo.toFixed(2)}`)

 if(calculo < 0.7 ) {
    console.log ("Vale mais a pena usar Alcool!")
 } else {
   console.log ("Vale mais a pena usar Gasolina!")
 }
