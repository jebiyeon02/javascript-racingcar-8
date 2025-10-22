import { Console } from "@woowacourse/mission-utils";
import Car from "./Car.js";

class App {
  async isValidateNames(names) {
    // 여기 indent depth 줄여보자 나중에
    names.map((name) => {
      if (name.length > 5)
        throw new Error(
          "[ERROR] : 자동차 이름은 다섯 글자를 초과할 수 없습니다."
        );
      if (name.length === 0)
        throw new Error("[ERROR] : 자동차 이름에 빈 값이 존재합니다.");
      return name;
    });

    const nameSet = new Set(names);
    if (names.length !== nameSet.size) {
      throw new Error("[ERROR] : 2개 이상의 자동차 이름이 동일합니다.");
    }
  }

  async isValidatePlayTimes(playTimes) {
    if (isNaN(playTimes) || playTimes < 0) {
      throw new Error("[ERROR] : 시도 횟수는 0 또는 양의 정수이어야 합니다.");
    }
  }

  async run() {
    const input = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const names = input.split(",").map((name) => name.replace(" ", ""));
    this.isValidateNames(names);

    const cars = [];
    for (const name of names) {
      cars.push(new Car(name));
    }

    const playTimes = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    this.isValidatePlayTimes(playTimes);
  }
}

export default App;
