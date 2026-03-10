import Car from "./Car";

class App {
  async run() {}

  static getCars(carNames) {
    return carNames.map((name) => new Car(name));
  }
}

export default App;
