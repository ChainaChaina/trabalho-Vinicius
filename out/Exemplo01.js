function saudacao(pessoa) {
    return "Olá " + pessoa;
}
var alguem = "Alunos da Sala de Aula";
console.log(saudacao(alguem));
var DiasSemana;
(function (DiasSemana) {
    DiasSemana[DiasSemana["Domingo"] = 1] = "Domingo";
    DiasSemana[DiasSemana["Segunda"] = 2] = "Segunda";
    DiasSemana[DiasSemana["Terca"] = 3] = "Terca";
    DiasSemana[DiasSemana["Quarta"] = 4] = "Quarta";
    DiasSemana[DiasSemana["Quinta"] = 5] = "Quinta";
    DiasSemana[DiasSemana["Sexta"] = 6] = "Sexta";
    DiasSemana[DiasSemana["Sabado"] = 7] = "Sabado";
})(DiasSemana || (DiasSemana = {}));
var Agenda = function (numero) { return console.log(DiasSemana[numero]); };
Agenda(4);
//# sourceMappingURL=Exemplo01.js.map