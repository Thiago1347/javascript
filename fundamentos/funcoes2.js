/**
 * estudo das funções com parâmetros e retorno
 * @author Thiago Nascimento
 */

function somar(a, b){
    return (console.log(a + b))
}



const somarA = function(a, b){
    return (console.log(a + b))
}

somarA(10,2)


const somarAF = (a, b)=> {
    return (console.log(a + b))
}
somarAF (2,2)

const somarAFS = (a , b )=> console.log(a + b)
somarAFS(3,9)