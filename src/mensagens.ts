export default class Mensagem {
  public listarOpcoes() {
    console.log(`Operações possíveis:`);
    console.log(
      `• Somar\n`,
      `• Subtrair\n`,
      `• Dividir\n`,
      `• Multiplicar\n`,
      `• Potencializar\n`,
      `• Racionalizar\n`,
      `• Bhaskara (Passe 3 valores)\n`,
    );
  }

  public comoUsar() {
    console.log(
      `Para usar digite os números e a opção de cálculo separados por espaço como: "1.5 2.5 Soma"`,
    );
    console.log(`O resultado será a soma dos números: 4`);
    console.log(`Para encerrar digite "Sair"\n`);
  }

  public boasVindas() {
    console.log("\nCalculadora polimórfica\n");
  }
}
