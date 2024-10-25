/**
 * tabuada
 * @author Thiago nascimento
 */

const input= require ('readline-sync')

let numero
console.clear()
console.log("tabuada")
numero = Number(input.question("Digite o valor da tabuada "))
for(let i = 1; i < 11; i++){
    console.log (`${numero} x ${i} = ${numero * i}`)
}

