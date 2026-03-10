import App from "../src/App";
import Car from "../src/Car";
import { ERROR_MESSAGE } from "../src/constants";

describe("레이싱 게임 테스트", () => {
  test("[기능] 시도 횟수만큼 모든 자동차가 전진시도를 한다.", () => {
    // given
    const names = ["a", "b", "c", "d", "e"];
    const cars = names.map((name) => new Car(name));
    const tryCount = 3;
    const spyMove = jest.spyOn(Car.prototype, "moveForward");

    // when
    App.tryAllCarsMoveForward(cars, tryCount);

    // then
    expect(spyMove).toHaveBeenCalledTimes(15);
  });

  test.each([0, -1])(
    "[예외] 시도 횟수가 %s이라면 예외가 발생한다. (경계 테스트)",
    (wrongNumber) => {
      expect(() => App.validateTryCount(wrongNumber)).toThrow(
        ERROR_MESSAGE.PREFIX,
      );
    },
  );
});
