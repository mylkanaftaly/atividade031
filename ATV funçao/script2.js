/**
 * Escreva um script que recebe as 3 notas de um aluno por parâmetro e uma letra. Se a letra for A, o procedimento calcula a média aritmetrica das notas do aluno, se for P, a sua média (pesos: 5, 3 e 2). A média calucula também deve retornar por parâmetro.
*/
function calcularMedia(nota1, nota2, nota3, letra) {
    let media;
    if (letra === "A") {
      media = (nota1 + nota2 + nota3) / 3;
    } else if (letra === "P") {
      media = (nota1 * 5 + nota2 * 3 + nota3 * 2) / 10;
    } else {
      console.log("Letra inválida. Digite A para média aritmética ou P para média ponderada.");
      return;
    }
    console.log(`A média do aluno é ${media.toFixed(2)}.`);
  }
  
  const nota1 = Number(prompt("Digite a primeira nota: "));
  const nota2 = Number(prompt("Digite a segunda nota: "));
  const nota3 = Number(prompt("Digite a terceira nota: "));
  const letra = prompt("Digite A para média aritmética ou P para média ponderada: ");
  
  calcularMedia(nota1, nota2, nota3, letra);
  