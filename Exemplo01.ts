function saudacao(pessoa) {
  return "Olá " + pessoa;
}

var alguem = "Alunos da Sala de Aula";

console.log(saudacao(alguem));

enum DiasSemana {
  Domingo = 1,
  Segunda = 2,
  Terca = 3,
  Quarta = 4,
  Quinta = 5,
  Sexta = 6,
  Sabado = 7,
}

(numero: number) => console.log(DiasSemana[numero]);
