import Car from "../src/Car";

describe("자동차 테스트", () => {
  test("[기능] 이동한 거리가 0인 자동차가 생성되아야 한다.", () => {
    // given
    const car = new Car("name");

    // when & then
    expect(car.getDistance()).toEqual(0);
  });

  test("[기능] 뽑은 숫자가 4일 때 1칸 전진해야 한다.", () => {
    // given
    const car = new Car("name");
    const canForwardNumber = 4;

    // when
    car.moveForward(canForwardNumber);

    // then
    expect(car.getDistance()).toEqual(1);
  });

  test("[기능] 뽑은 숫자가 4일 때 1칸 전진해야 한다.", () => {
    // given
    const car = new Car("name");
    const noForwardNumber = 3;

    // when
    car.moveForward(noForwardNumber);

    // then
    expect(car.getDistance()).toEqual(0);
  });

  test("[예외] 자동차 이름이 5글자를 초과하면 예외가 발생한다.", () => {
    // given
    const wrongName = "abcdef";

    // when & then
    expect(() => new Car(wrongName)).toThrow();
  });

  test("[예외] 자동차 이름이 1글자 미만이면 예외가 발생한다.", () => {
    // given
    const wrongName = "";

    // when & then
    expect(() => new Car(wrongName)).toThrow("[ERROR]");
  });
});
