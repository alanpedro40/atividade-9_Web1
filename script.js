const nome = prompt("Digite o nome do aluno:");
const nota1 = Number(prompt("Digite a primeira nota:"));
const nota2 = Number(prompt("Digite a segunda nota:"));

const media = (nota1 + nota2) / 2;

let situacao;
if (media >= 70) {
  situacao = "Aprovado";
} else {
  situacao = "Reprovado";
}

console.log(`Aluno: ${nome} | Média: ${media} | Situação: ${situacao}`);