import Car from "./Car";
import { ERROR_MESSAGE } from "./constants";

class App {
  async run() {}

  static getCars(carNames) {
    if (carNames.length !== new Set(carNames).size) {
      throw new Error(ERROR_MESSAGE.PREFIX);
    }
    return carNames.map((name) => new Car(name));
  }
}

export default App;
