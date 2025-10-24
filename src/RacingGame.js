import { Console } from '@woowacourse/mission-utils';

export default class RacingGame {
  constructor(cars, playTimes) {
    this.cars = cars;
    this.playTimes = playTimes;
  }

  playRound() {
    this.cars.map((car) => {
      car.forward();
      car.printNowDistance();
    });
    Console.print('');
  }

  startRacing() {
    Console.print('');
    Console.print('실행 결과');
    for (let i = 0; i < this.playTimes; i++) {
      this.playRound(this.cars);
    }
  }

  getMaxDistance() {
    let maxDistance = 0;
    this.cars.map((car) => {
      if (car.forwardDistance > maxDistance) {
        maxDistance = car.forwardDistance;
      }
    });

    return maxDistance;
  }

  printWinners() {
    const winners = this.cars
      .filter((car) => car.forwardDistance === this.getMaxDistance())
      .map((car) => car.name);
    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }
}
