export default class Mensagem {
  public listarOpcoes() {
    console.log("\x1b[93m-----------------------------------\x1b[0m");
    console.log(`\x1b[93mOperações possíveis: \x1b[0m`);
    console.log(`\x1b[93m
    • Somar
    • Subtrair
    • Multiplicar
    • Dividir
    • Potencializar
    • Racionalizar
    • Bhaskara (Passe 3 valores)\x1b[0m`);
    console.log("\x1b[93m-----------------------------------\n\x1b[0m");
  }

  public comoUsar() {
    console.log("\x1b[96mInstruções:\x1b[0m");
    console.log(
      `Para usar digite os números e a opção de cálculo separados por espaço como: "1.5 2.5 Somar"`,
    );
    console.log(`\x1b[90m• O resultado será a soma dos números: 4\n\x1b[0m`);
    console.log(`\x1b[93mPara encerrar digite "Sair"\n\x1b[0m`);
  }

  public boasVindas() {
    console.log(
      `\x1b[37m==============================================\x1b[0m`,
    );
    console.log(`\x1b[90m            -- Atividade RI6 --             \x1b[0m`);
    console.log(
      `\x1b[37m ¯\\_(ツ)_/¯ Calculadora polimórfica ¯\\_(ツ)_/¯ \x1b[0m`,
    );
    console.log(
      `\x1b[37m==============================================\x1b[0m\n`,
    );
  }
}
