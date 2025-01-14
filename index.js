import { calcularFaturamento, faturamentoData } from "./calcularFaturamento.js";
import {
  calcularPercentuais,
  faturamentoPorEstado,
} from "./calcularPercentuais.js";
import { calcularSoma } from "./calcularSoma.js";
import { inverterString } from "./inverterString.js";
import { verificaFibonacci } from "./verificaFibonacci.js";

// 1) CALCULAR SOMA
let INDICE = 13;
let resultado = calcularSoma(INDICE);

console.log("Resultado da soma: " + resultado);

/// 2) VERIFICAR FIBONACCI
const numero = 21;
console.log(verificaFibonacci(numero));

/// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
let resultadoFaturamento = calcularFaturamento(faturamentoData);

console.log(
  `Menor faturamento: R$ ${resultadoFaturamento.menorFaturamento.toFixed(2)}`
);
console.log(
  `Maior faturamento: R$ ${resultadoFaturamento.maiorFaturamento.toFixed(2)}`
);
console.log(
  `Dias com faturamento acima da média: ${resultadoFaturamento.diasAcimaMedia}`
);

/// 4) CALCULAR PERCENTUAIS
const totalFaturamento = Object.values(faturamentoPorEstado).reduce(
  (acc, valor) => acc + valor,
  0
);

let percentuais = calcularPercentuais(faturamentoPorEstado, totalFaturamento);

console.log(
  `Faturamento total da distribuidora: R$ ${totalFaturamento.toFixed(2)}`
);
console.log("Percentual de representação de cada estado:");

for (let estado in percentuais) {
  console.log(`${estado}: ${percentuais[estado]}%`);
}

/// 5) Inverter strings
let minhaString = "Target";

let resultadoString = inverterString(minhaString);

console.log("String original: " + minhaString);
console.log("String invertida: " + resultadoString);
