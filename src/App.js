import { Random } from "@woowacourse/mission-utils";
import Car from "./Car";
import { CAR, ERROR_MESSAGE } from "./constants";

class App {
  async run() {}

  static getCars(carNames) {
    if (carNames.length !== new Set(carNames).size) {
      throw new Error(ERROR_MESSAGE.PREFIX);
    }
    return carNames.map((name) => new Car(name));
  }

  static tryAllCarsMoveForward(cars, tryCount) {
    for (let i = 0; i < tryCount; i++) {
      cars.forEach((car) =>
        car.moveForward(
          Random.pickNumberInRange(CAR.FORWARD.MIN, CAR.FORWARD.MAX),
        ),
      );
    }
  }

  static validateTryCount(tryCount) {
    if (tryCount < 1) {
      throw new Error(ERROR_MESSAGE.PREFIX);
    }
  }
}

export default App;
