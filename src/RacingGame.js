import { Console } from '@woowacourse/mission-utils';

export default class RacingGame {
  constructor(cars, playTimes) {
    this.cars = cars;
    this.playTimes = playTimes;
  }

  forwardAllCars() {
    this.cars.map((car) => {
      car.forward();
    });
  }

  printAllCarDistance() {
    this.cars.map((car) => {
      car.printNowDistance();
    });
  }

  playRound() {
    this.forwardAllCars();
    this.printAllCarDistance();
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

  getWinner() {
    const winners = this.cars
      .filter((car) => car.forwardDistance === this.getMaxDistance())
      .map((car) => car.name);

    return winners;
  }

  printWinners() {
    Console.print(`최종 우승자 : ${this.getWinner().join(', ')}`);
  }
}
