/**
 * Faça um script contendo uma função que retorne 1, se
 * o número digitado for positivo ou 0 se for negativo
 */

let num = parseInt(prompt('Digite um número:'));

function checkPositiveNumber(num) {
    if(num >= 0){
        document.getElementById('info').innerHTML = `1`
    } else {
        document.getElementById('info').innerHTML = `0`
    }
}

checkPositiveNumber(num)

  
    


