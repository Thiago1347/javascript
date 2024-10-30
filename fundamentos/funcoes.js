/**
 * Estudo das funções simples
 * @author Thiago Nascimento
 */

hello()
// função literal
function hello(){
    console.log("Hello function")
}
console.log(typeof(hello))

//função atribuida
//funções atribuidas precisam ser criadas no inicio do codígo (antes da chamada da função)
const hello2 = function() {
    console.log("Hello2 Function")
}
hello2()
console.log(typeof(hello2))

//Arrow function (forma simplificada de criar uma função atribuida)
const hello3 = () => {
    console.log(("hello3 function" ))
}
hello3()
console.log(typeof(hello3))

// Arrow function mais simplificada (neste caso só é possível executra uma linha de código)
const  Hello4 =  _ => console.log("Hello4 function")
Hello4()
console.log(typeof(Hello4))