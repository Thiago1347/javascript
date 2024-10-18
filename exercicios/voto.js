/**
 * verificar obrigatoriedade de voto
 * @author Thiago Nascimento
 */

const input = require('readline-sync')

console.clear()
console.log(" verificar obrigatoriedade de voto")

//variaveis
let idade


idade = Number(input.question("digite sua idade: "))
if (idade< 16) {
    console.log ("não vota")
} else if(idade >=17 && idade <=71){
    console.log("voto facutativo")
} else {
    console.log("voto obrigatorio")
}
