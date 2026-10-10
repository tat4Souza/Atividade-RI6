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
    `\x1b[92mQuais são seus números e a operação desejada?\n\x1b[0m`,
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

      console.log(`\nEstas foram suas instruções: ${instrucoes}\n`);

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
          console.log(`\x1b[35mEncerrando, até uma próxima...\x1b[0m`);
          operacaoValida = false;
          break;
        default:
          console.log(`\x1b[91mErro: Operação não entendida :(\n\x1b[0m`);
          operacaoValida = false;
      }

      if (operacaoValida && calculo) {
        try {
          let resultado = calculo.calcular(numero1, numero2);
          if (operacao === "Bhaskara")
            resultado = calculo.calcular(numero1, numero2, numero3);
          console.log(
            `\x1b[37mO resultado da operação é: ${Array.isArray(resultado) ? `${resultado[0]} e ${resultado[1]}` : resultado}\n\x1b[0m`,
          );
        } catch (erro: any) {
          console.log(`\x1b[91mErro: ${erro.message}\n\x1b[0m`);
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
