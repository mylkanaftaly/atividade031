/**
 * Faça uma função que leia cinco valores inteiros, determine e mostre o maior e o menor deles.
 */

function encontrarMaiorMenor() {
    let numeros = [];
    for (let i = 0; i < 5; i++) {
      let num = parseInt(prompt("Digite um número inteiro:"));
      numeros.push(num);
    }

    let maior = numeros[0];
    let menor = numeros[0];
    
    for (let i = 1; i < 5; i++) {
      if (numeros[i] > maior) {
        maior = numeros[i];
      }
      if (numeros[i] < menor) {
        menor = numeros[i];
      }
    }
    console.log("O maior número é: " + maior);
    console.log("O menor número é: " + menor);
  }
  
  encontrarMaiorMenor()