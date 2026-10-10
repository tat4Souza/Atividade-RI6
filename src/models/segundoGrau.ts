import Calculo from "./calculo";
import Radiciacao from "./radiciacao";

export default class SegundoGrau extends Calculo {
  public calcular(
    numero1: number,
    numero2: number,
    numero3: number,
  ): number | number[] {
    let delta = numero2 ** 2 - 4 * numero1 * numero3;

    let calculo = new Radiciacao();
    let raizDelta = Number(calculo.calcular(delta, 2));

    let raiz1 = (-numero2 + raizDelta) / (2 * numero1);
    let raiz2 = (-numero2 - raizDelta) / (2 * numero1);

    if (delta === 0) {
      return raiz1;
    }

    return [raiz1, raiz2];
  }
}
