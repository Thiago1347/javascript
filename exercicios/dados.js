/**
 *Exemplo de uso de metodo para gerar numero aleatorio
 * Jogo de dado 
 * @author Thiago Nascimento
 */

 const input = require('readline-sync')

 let face 

 console.clear()
 console.log ("jogo do dados")
 input.question("Pressione a tecla [Entre] para jogar o dado")

 // Sorteio da face de um dado
 // Math classe matematica
 // floor() conversão para numeros inteiros
 //random() * (gerador de numeros aleatorios)

 face = Math.floor(Math.random()* 6)// 0 1 2 3 4 5 
 console.log(`Face do dado : ${face}`)