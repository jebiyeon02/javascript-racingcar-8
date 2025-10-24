import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';
import { ERROR_MESSAGES } from './constants/errorMessages.js';
import { CONSTANTS } from './constants/constants.js';

class App {
  isValidateNames(names) {
    names.map((name) => {
      if (name.length > CONSTANTS.CAR_NAME_MAX_LENGTH)
        throw new Error(ERROR_MESSAGES.CAR_NAME_LENGTH_OVER_MAX_LENGTH);
      if (name.length === 0) throw new Error(ERROR_MESSAGES.CAR_NAME_BLANK);
      return name;
    });

    const nameSet = new Set(names);
    if (names.length !== nameSet.size) {
      throw new Error(ERROR_MESSAGES.CAR_NAME_SAME);
    }
  }

  isValidatePlayTimes(playTimes) {
    if (isNaN(playTimes) || playTimes < 0) {
      throw new Error(ERROR_MESSAGES.INVALID_PLAY_TIMES);
    }
  }

  playRound(cars) {
    cars.map((car) => {
      car.forward();
      car.printNowDistance();
    });
    Console.print('');
  }

  startRacing(cars, playTimes) {
    Console.print('');
    Console.print('실행 결과');
    for (let i = 0; i < playTimes; i++) {
      this.playRound(cars);
    }
  }

  getMaxDistance(cars) {
    let maxDistance = 0;
    cars.map((car) => {
      if (car.forwardDistance > maxDistance) {
        maxDistance = car.forwardDistance;
      }
    });

    return maxDistance;
  }

  printWinners(cars, maxDistance) {
    const winners = cars
      .filter((car) => car.forwardDistance === maxDistance)
      .map((car) => car.name);
    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }

  async run() {
    const input = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    const names = input.split(',').map((name) => name.replace(' ', ''));
    this.isValidateNames(names);

    const cars = names.reduce((acc, name) => {
      acc.push(new Car(name));
      return acc;
    }, []);

    const playTimes =
      await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    this.isValidatePlayTimes(playTimes);
    this.startRacing(cars, playTimes);
    this.printWinners(cars, this.getMaxDistance(cars));
  }
}

export default App;
