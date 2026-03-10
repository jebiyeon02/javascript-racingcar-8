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

    // when
    car.moveForward(4);

    // then
    expect(car.getDistance()).toEqual(1);
  });

  test("[기능] 뽑은 숫자가 4일 때 1칸 전진해야 한다.", () => {
    // given
    const car = new Car("name");

    // when
    car.moveForward(3);

    // then
    expect(car.getDistance()).toEqual(0);
  });
});
