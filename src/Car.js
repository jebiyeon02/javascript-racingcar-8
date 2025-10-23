import { Random, Console } from '@woowacourse/mission-utils';

export default class Car {
  constructor(name) {
    this.name = name;
    this.forwardDistance = 0;
  }

  forward() {
    const number = Random.pickNumberInRange(0, 9);
    if (number >= 4) {
      this.forwardDistance += 1;
    }
  }

  printNowDistance() {
    const distanceSymbol = '-';
    Console.print(
      `${this.name} : ${distanceSymbol.repeat(this.forwardDistance)}`,
    );
  }
}
