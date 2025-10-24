import RacingGame from './RacingGame.js';
import InputManager from './InputManager.js';
import createCarsFromNames from './utils/createCarsFromNames.js';

class App {
  async run() {
    const inputManager = new InputManager();

    await inputManager.inputNames();
    inputManager.removeWhiteSpaceFromNames();
    inputManager.isValidateNames();

    await inputManager.inputPlayTimes();
    inputManager.isValidatePlayTimes();

    const [names, playTimes] = [
      inputManager.getNames(),
      inputManager.getPlayTimes(),
    ];

    const cars = createCarsFromNames(names);

    const racingGame = new RacingGame(cars, playTimes);
    racingGame.startRacing();
    racingGame.printWinners();
  }
}

export default App;
