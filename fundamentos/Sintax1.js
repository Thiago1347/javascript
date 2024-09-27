/**
 * Sintax basica da linhuagem java script
 * @author Thiago nascimento
 */



//limpar a tela do console
console.clear()

// JS  - Sentença
console.log("Hello World");

let idade = 19
 // o ponto é usado para casas decimais
let altura = 1.72
//typeof() é usado para identificar o tipo de variavel
let nome = "Thiago Nascimento"
console.log(typeof(nome))
 

// concatenação (unir texto e variaveis)
console.log(`Nome:  ${nome}`)
console.log("Nome: "+nome)

//arredonadamento (casas decimais)
let media =5.789
console.log(`Media: ${media.toFixed(1)}`)
console.log(typeof(nome))
console.log(typeof(idade))
console.log(typeof(altura))

//identificando variaveis  de numeros interios e nao inteiros
console.log(Number.isInteger(idade))
console.log(Number.isInteger(altura))


// particularidades do Java Script
console.log(10 / 0)
console.log(0.5 + 0.5)
console.log(0.1 + 0.2)
console.log("3" + 2)
console.log("3" - 2)
console.log("3x" - 2)