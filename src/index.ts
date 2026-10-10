import * as readline from "readline";
import Mensagem from "./mensagens";
import Soma from "./models/soma";
import Subtracao from "./models/subtracao";
import Multiplicacao from "./models/multiplicacao";
import Calculo from "./models/calculo";
import Divisao from "./models/divisao";
import Potenciacao from "./models/potenciacao";
import Radiciacao from "./models/radiciacao";
import SegundoGrau from "./models/segundoGrau";

let mensagens = new Mensagem();

let iniciar = () => {
  let leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  leitor.question(
    `Quais são seus números e a operação desejada?\n`,
    (valor) => {
      let instrucoes = valor.split(" ");
      let numero1 = Number(instrucoes[0]);
      let numero2 = Number(instrucoes[1]);
      let operacao = instrucoes[2];
      let numero3;

      if (instrucoes.length === 4 && instrucoes[3] === "Bhaskara") {
        numero3 = instrucoes[2];
        operacao = instrucoes[3];
      }

      if (instrucoes.length == 1) {
        operacao = instrucoes[0];
      }

      console.log(`Estas foram suas instruções: ${instrucoes}\n`);

      let calculo;
      let operacaoValida = true;

      switch (operacao) {
        case "Somar":
          calculo = new Soma();
          break;
        case "Subtrair":
          calculo = new Subtracao();
          break;
        case "Multiplicar":
          calculo = new Multiplicacao();
          break;
        case "Dividir":
          calculo = new Divisao();
          break;
        case "Potencializar":
          calculo = new Potenciacao();
          break;
        case "Racionalizar":
          calculo = new Radiciacao();
          break;
        case "Bhaskara":
          calculo = new SegundoGrau();
          break;
        case "Sair":
          console.log(`Encerrando, até uma próxima...`);
          operacaoValida = false;
          break;
        default:
          console.log(`Operação não entendida :(`);
          operacaoValida = false;
      }

      if (operacaoValida && calculo) {
        try {
          let resultado = calculo.calcular(numero1, numero2);
          if (operacao === "Bhaskara")
            resultado = calculo.calcular(numero1, numero2, numero3);
          console.log(
            `O resultado da operação é: ${Array.isArray(resultado) ? `${resultado[0]} e ${resultado[1]}` : resultado}\n`,
          );
        } catch (erro: any) {
          console.log(`Erro: ${erro.message}\n`);
        }
      }

      leitor.close();
      if (operacao != "Sair") {
        mensagens.comoUsar();
        iniciar();
      }
    },
  );
};
mensagens.boasVindas();
mensagens.listarOpcoes();
mensagens.comoUsar();
iniciar();
